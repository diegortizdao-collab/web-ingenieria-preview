/* Asistente guiado de consultas. Las preguntas se editan en content.js (SITE.bot). */
(function () {
  var S = window.SITE, B = S && S.bot;
  if (!B) return;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (t) { var d = document.createElement("div"); d.textContent = t; return d.innerHTML; };
  var launcher = $("bot-launcher"), panel = $("bot-panel"), log = $("bot-log"), ctrl = $("bot-ctrl");
  var state = { i: 0, resp: [] };

  $("bot-title").textContent = B.titulo;
  $("bot-sub").textContent = B.subtitulo;
  $("bot-launcher-text").textContent = B.boton || "Consultá acá";

  function resumen() {
    var lineas = ["Consulta desde la web de " + S.marca.nombre];
    B.pasos.forEach(function (p, k) {
      var r = state.resp[k];
      if (r && !r.omitido) lineas.push(p.etiqueta + ": " + r.texto);
    });
    return lineas.join("\n");
  }

  function bubble(cls, html) { return '<div class="msg ' + cls + '">' + html + "</div>"; }

  function render() {
    var out = [bubble("m-bot", esc(B.saludo))];
    var fin = state.i >= B.pasos.length;
    B.pasos.forEach(function (p, k) {
      if (k > state.i) return;
      out.push(bubble("m-bot", esc(p.pregunta)));
      if (k < state.i) out.push(bubble("m-user", esc(state.resp[k].texto)));
    });
    if (fin && !state.contado) {
      state.contado = true;
      if (window.track) window.track("bot_consulta_completa", { necesidad: (state.resp[0] || {}).texto, rubro: (state.resp[1] || {}).texto, plazo: (state.resp[3] || {}).texto });
    }
    if (fin) out.push(bubble("m-bot", esc(B.cierre) + '<pre class="sum">' + esc(resumen()) + "</pre>"));
    log.innerHTML = out.join("");
    log.scrollTop = log.scrollHeight;
    $("bot-back").hidden = state.i === 0;

    if (fin) {
      var txt = resumen();
      var wa = "https://wa.me/" + S.marca.whatsapp + "?text=" + encodeURIComponent(txt);
      var mail = "mailto:" + S.marca.email + "?subject=" + encodeURIComponent("Consulta desde la web") + "&body=" + encodeURIComponent(txt);
      ctrl.innerHTML =
        '<a class="btn btn-primary" href="' + wa + '" target="_blank" rel="noopener">Enviar por WhatsApp</a>' +
        '<a class="btn btn-ghost" href="' + mail + '">Enviar por email</a>' +
        '<div class="row"><button type="button" class="link" id="bot-copy">Copiar resumen</button><button type="button" class="link" id="bot-restart">Empezar de nuevo</button></div>' +
        '<p class="note" id="bot-note">' + esc(B.nota) + "</p>";
      $("bot-copy").onclick = function () {
        try { navigator.clipboard.writeText(txt).then(function () { $("bot-note").textContent = "Resumen copiado."; }, function () { $("bot-note").textContent = "No se pudo copiar. Seleccioná el texto y copialo."; }); }
        catch (e) { $("bot-note").textContent = "No se pudo copiar. Seleccioná el texto y copialo."; }
      };
      $("bot-restart").onclick = function () { state = { i: 0, resp: [] }; render(); };
      return;
    }

    var p = B.pasos[state.i];
    if (p.tipo === "opciones") {
      ctrl.innerHTML = '<div class="opts">' + p.opciones.map(function (o, n) {
        return '<button type="button" class="opt" data-n="' + n + '">' + esc(o) + "</button>";
      }).join("") + "</div>";
      ctrl.onclick = function (e) {
        var b = e.target.closest(".opt"); if (!b) return;
        responder(p.opciones[+b.getAttribute("data-n")], false);
      };
    } else {
      ctrl.innerHTML =
        '<form class="tform" novalidate><label class="sr" for="bot-in">' + esc(p.pregunta) + '</label>' +
        '<input id="bot-in" type="text" autocomplete="off" placeholder="' + esc(p.placeholder || "") + '">' +
        '<button type="submit" class="btn btn-primary">Enviar</button></form>' +
        (p.opcional ? '<button type="button" class="link skip" id="bot-skip">' + esc(p.omitir || "Omitir") + "</button>" : "") +
        '<p class="note err" id="bot-err" role="alert"></p>';
      ctrl.onclick = null;
      var inp = $("bot-in");
      ctrl.querySelector("form").onsubmit = function (e) {
        e.preventDefault();
        var v = inp.value.trim();
        if (!p.opcional && v.length < (p.minimo || 2)) { $("bot-err").textContent = "Completá este dato para continuar."; return; }
        if (!v) { responder(p.omitir || "Omitido", true); return; }
        responder(v, false);
      };
      if (p.opcional) $("bot-skip").onclick = function () { responder(p.omitir || "Omitido", true); };
      setTimeout(function () { inp.focus({ preventScroll: true }); }, 30);
    }
  }

  function responder(texto, omitido) {
    state.resp[state.i] = { texto: texto, omitido: omitido };
    state.i++;
    render();
  }

  function abrir() {
    if (window.track) window.track("bot_abierto");
    panel.hidden = false; launcher.hidden = true; launcher.setAttribute("aria-expanded", "true");
    document.body.classList.add("bot-open");
    render();
  }
  function cerrar() {
    panel.hidden = true; launcher.hidden = false; launcher.setAttribute("aria-expanded", "false");
    document.body.classList.remove("bot-open");
    launcher.focus({ preventScroll: true });
  }
  launcher.addEventListener("click", abrir);
  $("bot-close").addEventListener("click", cerrar);
  $("bot-back").addEventListener("click", function () {
    if (state.i > 0) { state.i--; state.resp.length = state.i; render(); }
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !panel.hidden) cerrar(); });
  Array.prototype.forEach.call(document.querySelectorAll("[data-open-bot]"), function (b) {
    b.addEventListener("click", function () { if (panel.hidden) abrir(); });
  });
})();
