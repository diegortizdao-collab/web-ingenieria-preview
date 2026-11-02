(function () {
  var S = window.SITE;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (t) { var d = document.createElement("div"); d.textContent = t; return d.innerHTML; };

  var ICONS = {
    rack:     '<path d="M4 3v18M20 3v18M4 8h16M4 14h16M4 20h16"/><path d="M7 8V5h4v3M13 14v-3h4v3M8 20v-3h4v3"/>',
    stairs:   '<path d="M3 20h5v-4h5v-4h5V8h3"/><path d="M3 20V4"/>',
    lift:     '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M12 16V8M9 11l3-3 3 3"/><path d="M7 19h10"/>',
    karakuri: '<circle cx="8" cy="8" r="3"/><circle cx="17" cy="15" r="4"/><path d="M10.5 10l3.5 2.5M3 20l4-5"/>',
    layout:   '<rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="5"/><rect x="13" y="11" width="8" height="10"/><rect x="3" y="14" width="8" height="7"/>',
    check:    '<path d="M5 3h10l4 4v14H5z"/><path d="M8 13l3 3 5-6"/>'
  };
  var icon = function (n) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[n] || ICONS.check) + "</svg>";
  };
  var RUBRO_ICON = { "Estanterías": "rack", "Escaleras": "stairs", "Elevadores": "lift", "Karakuri": "karakuri" };

  // Marca y cabecera
  document.title = S.marca.nombre + " · Estanterías, escaleras y karakuri";
  $("brand-name").textContent = S.marca.nombre;
  $("foot-brand").textContent = S.marca.nombre + " · " + S.marca.ciudad;
  $("hero-eyebrow").textContent = S.hero.eyebrow;
  $("hero-title").textContent = S.hero.titulo;
  $("hero-sub").textContent = S.hero.bajada;
  $("hero-cta1").textContent = S.hero.cta1;
  $("hero-cta2").textContent = S.hero.cta2;
  $("hero-stats").innerHTML = S.hero.stats.map(function (s) {
    return '<div class="stat"><b>' + esc(s.valor) + "</b><span>" + esc(s.etiqueta) + "</span></div>";
  }).join("");
  if (S.preview) $("preview-band").hidden = false;

  // Servicios
  $("servicios-grid").innerHTML = S.servicios.map(function (s) {
    return '<article class="card"><div class="ico">' + icon(s.icono) + "</div><h3>" + esc(s.titulo) + "</h3><p>" + esc(s.texto) + "</p></article>";
  }).join("");

  // Proyectos con filtro por rubro
  var rubros = ["Todos"].concat(S.proyectos.map(function (p) { return p.rubro; }).filter(function (r, i, a) { return a.indexOf(r) === i; }));
  var actual = "Todos";
  function pintarProyectos() {
    $("filters").innerHTML = rubros.map(function (r) {
      return '<button class="chip" type="button" data-r="' + esc(r) + '" aria-pressed="' + (r === actual) + '">' + esc(r) + "</button>";
    }).join("");
    $("proyectos-grid").innerHTML = S.proyectos.filter(function (p) { return actual === "Todos" || p.rubro === actual; }).map(function (p) {
      var media = p.imagen ? '<img src="' + esc(p.imagen) + '" alt="' + esc(p.titulo) + '" loading="lazy">' : icon(RUBRO_ICON[p.rubro] || "layout");
      return '<article class="proj"><div class="proj-img">' + media + '<span class="tag">' + esc(p.rubro) + '</span></div><div class="proj-body"><h3>' +
        esc(p.titulo) + '</h3><div class="meta"><span class="dato">' + esc(p.dato) + "</span><span>" + esc(p.anio) + "</span></div></div></article>";
    }).join("");
  }
  $("filters").addEventListener("click", function (e) {
    var b = e.target.closest(".chip"); if (!b) return;
    actual = b.getAttribute("data-r"); pintarProyectos();
  });
  pintarProyectos();

  // Proceso
  $("proceso-list").innerHTML = S.proceso.map(function (p) {
    return "<li><h3>" + esc(p.titulo) + "</h3><p>" + esc(p.texto) + "</p></li>";
  }).join("");

  // Perfil
  $("about-title").textContent = S.sobreMi.titulo;
  $("about-text").innerHTML = S.sobreMi.parrafos.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("");
  $("about-tags").innerHTML = S.sobreMi.puntos.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
  $("pc-name").textContent = S.marca.persona;
  $("pc-role").textContent = S.marca.cargo;
  $("pc-linkedin").href = S.marca.linkedin;

  // Contacto
  $("contact-title").textContent = S.contacto.titulo;
  $("contact-text").textContent = S.contacto.texto;
  $("contact-list").innerHTML =
    '<li>LinkedIn: <a href="' + esc(S.marca.linkedin) + '" target="_blank" rel="noopener">ver perfil</a></li>' +
    "<li>Email: " + esc(S.marca.email) + "</li><li>" + esc(S.marca.ciudad) + "</li>";
  $("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var n = $("f-nombre").value.trim(), m = $("f-msg").value.trim(), em = $("f-empresa").value.trim();
    if (!n || !m) { $("form-note").textContent = "Completá nombre y proyecto para continuar."; return; }
    var txt = "Hola, soy " + n + (em ? " de " + em : "") + ". " + m;
    $("form-note").textContent = "Abriendo WhatsApp…";
    window.open("https://wa.me/" + S.marca.whatsapp + "?text=" + encodeURIComponent(txt), "_blank", "noopener");
  });

  // Pie
  $("foot-credit").textContent = S.credito.texto;
  $("foot-tel").textContent = S.credito.telefono;

  // Tema
  var root = document.documentElement;
  var t = null; try { t = localStorage.getItem("tema"); } catch (e) {}
  root.setAttribute("data-theme", t || "dark");
  $("theme-toggle").addEventListener("click", function () {
    var oscuro = root.getAttribute("data-theme") === "dark" ||
      (!root.getAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    var n = oscuro ? "light" : "dark";
    root.setAttribute("data-theme", n);
    try { localStorage.setItem("tema", n); } catch (e) {}
  });
})();
