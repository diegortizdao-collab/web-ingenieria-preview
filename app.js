(function () {
  var S = window.SITE;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (t) { var d = document.createElement("div"); d.textContent = t; return d.innerHTML; };

  var ICONS = {
    rack:     '<path d="M4 3v18M20 3v18M4 8h16M4 14h16M4 20h16"/><path d="M7 8V5h4v3M13 14v-3h4v3M8 20v-3h4v3"/>',
    karakuri: '<circle cx="8" cy="8" r="3"/><circle cx="17" cy="15" r="4"/><path d="M10.5 10l3.5 2.5M3 20l4-5"/>',
    layout:   '<rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="5"/><rect x="13" y="11" width="8" height="10"/><rect x="3" y="14" width="8" height="7"/>',
    check:    '<path d="M5 3h10l4 4v14H5z"/><path d="M8 13l3 3 5-6"/>',
    design:   '<path d="M4 20l1-4L16 5l3 3L8 19z"/><path d="M14 7l3 3"/>',
    conveyor: '<rect x="3" y="12" width="18" height="4" rx="2"/><circle cx="7" cy="9.5" r="1.4"/><circle cx="12" cy="9.5" r="1.4"/><circle cx="17" cy="9.5" r="1.4"/><path d="M6 16v4M18 16v4"/>',
    table:    '<path d="M3 9h18M5 9v11M19 9v11M3 9l2-4h14l2 4"/>',
    jig:      '<path d="M4 20V10h6V4h4v6h6v10z"/><circle cx="12" cy="15" r="2"/>',
    frame:    '<path d="M4 21V7M20 21V7M2 7h20M4 12h16M7 7l-3 5M17 7l3 5"/>'
  };
  var icon = function (n) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[n] || ICONS.check) + "</svg>";
  };
  var RUBRO_ICON = { "Estructuras": "frame", "Transporte": "conveyor", "Racks": "rack", "Mesas": "table", "Utillaje": "jig", "Karakuri": "karakuri" };

  // ---------- Marca y portada ----------
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
  $("rubros").innerHTML = S.hero.rubros.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("");
  if (S.preview) $("preview-band").hidden = false;

  // ---------- Servicios ----------
  $("servicios-grid").innerHTML = S.servicios.map(function (s) {
    return '<article class="card"><div class="ico">' + icon(s.icono) + "</div><h3>" + esc(s.titulo) + "</h3><p>" + esc(s.texto) + "</p></article>";
  }).join("");
  $("espec").innerHTML = S.especialidades.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
  $("spec-note").textContent = "Disponibilidad: " + S.marca.ciudad.split(",")[0] + " · Precios: consultar";

  // ---------- Proyectos con filtro ----------
  var rubros = ["Todos"].concat(S.proyectos.map(function (p) { return p.rubro; }).filter(function (r, i, a) { return a.indexOf(r) === i; }));
  var actual = "Todos";
  function pintarProyectos() {
    $("filters").innerHTML = rubros.map(function (r) {
      return '<button class="chip" type="button" data-r="' + esc(r) + '" aria-pressed="' + (r === actual) + '">' + esc(r) + "</button>";
    }).join("");
    $("proyectos-grid").innerHTML = S.proyectos.filter(function (p) { return actual === "Todos" || p.rubro === actual; }).map(function (p) {
      var media = p.imagen ? '<img class="' + (p.ajuste === "contain" ? "fit-contain" : "") + '"' + (p.posicion ? ' style="object-position:' + esc(p.posicion) + '"' : "") + ' src="' + esc(p.imagen) + '" alt="' + esc(p.titulo) + '" loading="lazy">' : icon(RUBRO_ICON[p.rubro] || "layout");
      var det = (p.imagenes && p.imagenes.length) || p.detalle;
      var idx = S.proyectos.indexOf(p);
      return '<article class="proj' + (det ? " clickable" : "") + '"' + (det ? ' tabindex="0" role="button" data-i="' + idx + '" aria-label="Ver detalle: ' + esc(p.titulo) + '"' : "") + '><div class="proj-img">' + media + '<span class="tag">' + esc(p.rubro) + '</span></div><div class="proj-body"><h3>' +
        esc(p.titulo) + '</h3>' + (det ? '<span class="more">Ver detalle →</span>' : "") + '<div class="meta"><span class="dato">' + esc(p.dato) + "</span><span>" + esc(p.anio || "") + "</span></div></div></article>";
    }).join("");
  }
  $("filters").addEventListener("click", function (e) {
    var b = e.target.closest(".chip"); if (!b) return;
    actual = b.getAttribute("data-r"); pintarProyectos();
  });
  pintarProyectos();

  // ---------- Detalle de proyecto (galería) ----------
  var dlg = $("proj-dialog");
  function abrir(i) {
    var p = S.proyectos[i]; if (!p) return;
    var imgs = p.imagenes && p.imagenes.length ? p.imagenes : (p.imagen ? [{ src: p.imagen, alt: p.titulo }] : []);
    function ver(k) {
      $("dlg-img").src = imgs[k].src; $("dlg-img").alt = imgs[k].alt; $("dlg-cap").textContent = imgs[k].alt;
      Array.prototype.forEach.call($("dlg-thumbs").children, function (b, n) { b.setAttribute("aria-pressed", n === k); });
    }
    $("dlg-thumbs").innerHTML = imgs.length > 1 ? imgs.map(function (m, n) {
      return '<button type="button" data-k="' + n + '" aria-label="' + esc(m.alt) + '"><img src="' + esc(m.src) + '" alt=""></button>';
    }).join("") : "";
    $("dlg-thumbs").onclick = function (e) { var b = e.target.closest("button"); if (b) ver(+b.getAttribute("data-k")); };
    $("dlg-rubro").textContent = p.rubro;
    $("dlg-title").textContent = p.titulo;
    $("dlg-text").innerHTML = (p.detalle || []).map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("");
    if (imgs.length) ver(0);
    dlg.showModal();
  }
  $("proyectos-grid").addEventListener("click", function (e) {
    var c = e.target.closest(".clickable"); if (c) abrir(+c.getAttribute("data-i"));
  });
  $("proyectos-grid").addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var c = e.target.closest(".clickable"); if (c) { e.preventDefault(); abrir(+c.getAttribute("data-i")); }
  });
  $("dlg-close").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });

  // ---------- Proceso ----------
  $("proceso-list").innerHTML = S.proceso.map(function (p) {
    return "<li><h3>" + esc(p.titulo) + "</h3><p>" + esc(p.texto) + "</p></li>";
  }).join("");

  // ---------- Nosotros ----------
  var N = S.nosotros;
  $("nos-title").textContent = N.titulo;
  $("nos-text").innerHTML = N.parrafos.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("");
  $("porque-title").textContent = N.porqueTitulo;
  $("porque-list").innerHTML = N.porque.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
  $("nos-rubros").innerHTML = S.hero.rubros.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
  $("socios-title").textContent = N.sociosTitulo;
  $("socios").innerHTML = S.socios.map(function (s) {
    var ini = s.nombre.replace(/[\[\]]/g, "").split(/\s+/).slice(0, 2).map(function (w) { return w.charAt(0); }).join("").toUpperCase();
    var foto = s.foto ? '<img src="' + esc(s.foto) + '" alt="' + esc(s.nombre) + '">' : "<span>" + esc(ini) + "</span>";
    var link = s.linkedin
      ? '<a class="btn btn-ghost" href="' + esc(s.linkedin) + '" target="_blank" rel="noopener">Ver perfil en LinkedIn</a>'
      : '<span class="pending">Perfil de LinkedIn a cargar</span>';
    return '<article class="founder"><div class="avatar">' + foto + '</div><h3>' + esc(s.nombre) + '</h3><p>' + esc(s.cargo) + "</p>" + link + "</article>";
  }).join("");

  // ---------- Contacto ----------
  $("contact-title").textContent = S.contacto.titulo;
  $("contact-text").textContent = S.contacto.texto;
  $("contact-list").innerHTML =
    '<li>Email: <a href="mailto:' + esc(S.marca.email) + '">' + esc(S.marca.email) + "</a></li>" +
    "<li>Teléfono: " + esc(S.marca.telefono) + "</li>" +
    '<li>LinkedIn: <a href="' + esc(S.marca.linkedin) + '" target="_blank" rel="noopener">JM Soluciones de Ingeniería</a></li>' +
    "<li>" + esc(S.marca.ciudad) + "</li>";
  $("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var n = $("f-nombre").value.trim(), m = $("f-msg").value.trim(), em = $("f-empresa").value.trim();
    if (!n || !m) { $("form-note").textContent = "Completá nombre y proyecto para continuar."; return; }
    var txt = "Hola, soy " + n + (em ? " de " + em : "") + ". " + m;
    $("form-note").textContent = "Abriendo WhatsApp…";
    window.open("https://wa.me/" + S.marca.whatsapp + "?text=" + encodeURIComponent(txt), "_blank", "noopener");
  });

  // ---------- Pie ----------
  $("foot-credit").textContent = S.credito.texto;
  $("foot-tel").textContent = S.credito.telefono;

  // ---------- Navegación por secciones ----------
  var menu = S.menu;
  var ids = menu.map(function (m) { return m.id; });
  var etiqueta = {}; menu.forEach(function (m) { etiqueta[m.id] = m.label; });

  $("tabs").innerHTML = menu.map(function (m) {
    return '<a href="#' + m.id + '" data-id="' + m.id + '">' + esc(m.label) + "</a>";
  }).join("");

  $("access-grid").innerHTML = menu.filter(function (m) { return m.id !== "inicio"; }).map(function (m) {
    return '<a href="#' + m.id + '"><b>' + esc(m.label) + "</b><span>" + esc(m.desc) + "</span><i>Abrir →</i></a>";
  }).join("");

  ids.forEach(function (id, i) {
    if (id === "inicio") return;
    var prev = ids[i - 1], next = ids[i + 1];
    var html = '<nav class="pager" aria-label="Navegación entre secciones">' +
      '<a class="btn btn-ghost" href="#' + prev + '">← ' + esc(etiqueta[prev]) + "</a>" +
      '<a class="btn btn-ghost mid" href="#inicio">Inicio</a>' +
      (next ? '<a class="btn btn-primary" href="#' + next + '">' + esc(etiqueta[next]) + " →</a>" : '<a class="btn btn-primary" href="#inicio">Volver al inicio</a>') +
      "</nav>";
    $("v-" + id).querySelector(".wrap").insertAdjacentHTML("beforeend", html);
  });

  function ruta() {
    var id = (location.hash || "").replace("#", "");
    return ids.indexOf(id) >= 0 ? id : "inicio";
  }
  var primera = true;
  function mostrar() {
    var id = ruta();
    Array.prototype.forEach.call(document.querySelectorAll(".view"), function (v) {
      v.classList.toggle("active", v.id === "v-" + id);
    });
    Array.prototype.forEach.call(document.querySelectorAll("#tabs a"), function (a) {
      if (a.getAttribute("data-id") === id) {
        a.setAttribute("aria-current", "page");
        if (a.scrollIntoView) a.scrollIntoView({ block: "nearest", inline: "center" });
      } else a.removeAttribute("aria-current");
    });
    document.title = (id === "inicio" ? S.marca.nombre + " · " + S.marca.subtitulo : etiqueta[id] + " · " + S.marca.nombre);
    window.scrollTo(0, 0);
    if (!primera) $("v-" + id).focus({ preventScroll: true });
    primera = false;
  }
  window.addEventListener("hashchange", mostrar);
  mostrar();

  // ---------- Tema (oscuro por defecto) ----------
  var root = document.documentElement;
  var t = null; try { t = localStorage.getItem("tema"); } catch (e) {}
  root.setAttribute("data-theme", t || "dark");
  $("theme-toggle").addEventListener("click", function () {
    var n = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", n);
    try { localStorage.setItem("tema", n); } catch (e) {}
  });
})();
