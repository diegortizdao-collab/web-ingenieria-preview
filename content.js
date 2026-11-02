/* ============================================================
   CONTENIDO DEL SITIO — único archivo a editar.
   Textos de empresa: tomados del "Acerca de" de LinkedIn.
   Lo marcado "EJEMPLO" es provisorio para la previsualización.
   ============================================================ */
window.SITE = {
  preview: true, // false = oculta la cinta "vista previa"

  marca: {
    nombre: "JM Soluciones de Ingeniería",
    subtitulo: "Diseño, Ingeniería y Metalúrgica",
    linkedin: "https://www.linkedin.com/company/jm-soluciones-de-ingenieria/",
    whatsapp: "5491157519735",
    telefono: "11 5751-9735",
    email: "solucionesing.jm@gmail.com",
    ciudad: "Buenos Aires, Argentina"
  },

  menu: [ // orden de las pestañas; "inicio" siempre va primero
    { id: "inicio",    label: "Inicio",    desc: "" },
    { id: "servicios", label: "Servicios", desc: "Diseño, dispositivos, transporte, mesas y utillaje." },
    { id: "proyectos", label: "Proyectos", desc: "Trabajos realizados, filtrados por rubro." },
    { id: "proceso",   label: "Proceso",   desc: "Del diagnóstico a la fabricación." },
    { id: "nosotros",  label: "Nosotros",  desc: "Quiénes somos y quiénes están detrás." },
    { id: "contacto",  label: "Contacto",  desc: "Contanos qué necesitás." }
  ],

  hero: {
    eyebrow: "Diseño · Ingeniería · Metalúrgica",
    titulo: "Ingeniería que se fabrica a medida.",
    bajada: "Acompañamos tu proyecto de punta a punta: diagnóstico, diseño, simulación y fabricación en taller propio.",
    cta1: "Solicitar servicios",
    cta2: "Ver proyectos",
    stats: [
      { valor: "Punta a punta", etiqueta: "diagnóstico a fabricación" },
      { valor: "Taller propio", etiqueta: "con control de calidad" },
      { valor: "100 %", etiqueta: "en tu proyecto" }
    ],
    rubros: ["Manufactura industrial", "Automotriz y autopartes", "Alimentos y bebidas", "Logística y almacenes"]
  },

  servicios: [
    { icono: "design",   titulo: "Diseño e ingeniería metalúrgica", texto: "Piezas, dispositivos y equipos a medida, desde el diagnóstico hasta el plano de fabricación." },
    { icono: "karakuri", titulo: "Dispositivos industriales", texto: "Soluciones para necesidades específicas de cada planta: elevadores, escaleras y mecanismos karakuri." },
    { icono: "conveyor", titulo: "Transporte y manipulación", texto: "Cintas transportadoras, carros, racks y estanterías para mover y almacenar material." },
    { icono: "table",    titulo: "Mesas de trabajo a medida", texto: "Diseñadas según tu proceso y el espacio disponible en planta." },
    { icono: "jig",      titulo: "Máquinas herramienta, jigs y hangers", texto: "Utillaje y equipos de sujeción para líneas de producción." },
    { icono: "check",    titulo: "Fabricación metalmecánica", texto: "Fabricación bajo especificación técnica, con control de calidad." }
  ],

  especialidades: ["Diseño 3D", "Diseño de ingeniería", "Diseño industrial", "Gestión de proyectos"],

  proyectos: [ // Reales: planos, fotos y renders de LinkedIn. Solo el Karakuri es EJEMPLO.
    {
      titulo: "Pórtico industrial de 10 toneladas", rubro: "Estructuras", anio: "", dato: "Del diseño al montaje final",
      imagen: "img/portico-planta.jpg",
      imagenes: [
        { src: "img/portico-planta.jpg", alt: "Pórtico instalado en planta" },
        { src: "img/portico-simulacion.jpg", alt: "Simulación de desplazamientos de la estructura (UX, mm)" },
        { src: "img/portico-modelo3d.jpg", alt: "Modelo 3D con numeración de elementos" }
      ],
      detalle: [
        "Pórtico industrial para 10 toneladas, desarrollado especialmente para las necesidades de la planta.",
        "Desde la idea inicial hasta el diseño técnico, memoria de cálculo, planos y el montaje final, el proyecto se llevó adelante trabajando en conjunto con otros proveedores, logrando una solución sólida, segura y totalmente adaptada al proceso productivo."
      ]
    },
    { titulo: "Carro de transporte con soporte inclinado", rubro: "Transporte", anio: "", dato: "Plano con cotas 900 / 500 mm", imagen: "img/carro-plano.jpg", ajuste: "contain" },
    { titulo: "Bastidor inclinado con soportes", rubro: "Racks", anio: "", dato: "Estructura en perfil tubular", imagen: "img/bastidor-inclinado.jpg" },
    { titulo: "Carro de manipulación con pinzas", rubro: "Transporte", anio: "", dato: "Del diseño a la fabricación", imagen: "img/carro-pinzas.jpg" },
    { titulo: "Dispositivo de izaje con pinzas", rubro: "Utillaje", anio: "", dato: "Fabricado en taller propio", imagen: "img/izaje-pinzas.jpg", posicion: "50% 80%" },
    { titulo: "Medios apilables para traslado de piezas", rubro: "Transporte", anio: "", dato: "Con o sin ruedas · rubro automotriz", imagen: "img/medio-apilable.jpg",
      detalle: ["Medios apilables con o sin ruedas para el traslado de partes o piezas en el rubro automotriz."] },
    { titulo: "Sistema de transporte de 7 m con altura regulable", rubro: "Transporte", anio: "", dato: "Cajas pesadas · rubro logístico", imagen: "img/transportador-7m.jpg",
      detalle: ["Sistema de transporte de 7 metros con altura regulable en un extremo, para cajas pesadas, diseñado para el rubro logístico."] },
    { titulo: "Medio de traslado de piezas", rubro: "Transporte", anio: "", dato: "Estructura reforzada a medida", imagen: "img/medio-traslado.jpg" },
    { titulo: "Dispositivo de sujeción con mordazas", rubro: "Utillaje", anio: "", dato: "Utillaje para línea de producción", imagen: "img/jig-mordazas.jpg" },
    { titulo: "Hanger de izaje", rubro: "Utillaje", anio: "", dato: "Equipo de sujeción para izaje", imagen: "img/hanger-verde.jpg", posicion: "50% 65%" },
    { titulo: "Dispositivo industrial a medida", rubro: "Utillaje", anio: "", dato: "Fabricado en taller propio", imagen: "img/dispositivo-celeste.jpg" },
    { titulo: "Mesa transportadora con banda", rubro: "Mesas", anio: "", dato: "Mesa de trabajo con motorización", imagen: "img/mesa-banda.jpg" },
    { titulo: "Karakuri de alimentación por gravedad", rubro: "Karakuri", anio: "2024", dato: "EJEMPLO", imagen: "" }
  ],

  proceso: [
    { titulo: "Diagnóstico", texto: "Relevamos tu planta, el proceso y el espacio disponible para definir qué se necesita." },
    { titulo: "Diseño", texto: "Ingeniería metalúrgica de la pieza, dispositivo o equipo a medida." },
    { titulo: "Simulación", texto: "Validamos el diseño antes de fabricar." },
    { titulo: "Fabricación", texto: "Producción en taller propio, bajo especificación técnica y con control de calidad." }
  ],

  nosotros: {
    titulo: "Quiénes somos",
    parrafos: [
      "En JM – Diseño, Ingeniería y Metalúrgica acompañamos tu proyecto de punta a punta: diagnóstico, diseño, simulación y fabricación en taller propio.",
      "Trabajamos para distintos rubros y para cualquier industria que necesite ingeniería y fabricación a medida."
    ],
    porqueTitulo: "Por qué elegirnos",
    porque: [
      "Ingeniería orientada a fabricación",
      "Producción propia con control de calidad",
      "Comunicación directa con quien diseña y fabrica tu proyecto",
      "Equipo ágil y enfocado, con foco 100 % en tu proyecto",
      "Diseños ergonómicos que cuidan a tu equipo",
      "Durabilidad garantizada, con materiales y procesos de alta calidad"
    ],
    sociosTitulo: "Socios fundadores"
  },

  socios: [
    { nombre: "Martin Martucci", cargo: "Socio fundador", foto: "img/socio-martin.jpg",
      linkedin: "https://www.linkedin.com/company/jm-soluciones-de-ingenieria/people/" }, // reemplazar por el link personal
    { nombre: "Javier Cantero", cargo: "Socio fundador · Diseño mecánico e ingeniería de procesos", foto: "img/socio-javier.jpg",
      frase: "De la idea al plano: dispositivos y proyectos industriales que funcionan.",
      skills: ["SolidWorks", "AutoCAD", "Inventor"],
      linkedin: "https://www.linkedin.com/company/jm-soluciones-de-ingenieria/people/" }  // reemplazar por el link personal
  ],

  contacto: {
    titulo: "¿Listo para llevar tu producción al siguiente nivel?",
    texto: "Describí brevemente el proyecto y te respondemos con los próximos pasos."
  },

  credito: {
    texto: "Desarrollado por Mgter. Diego Ortiz — Líder de Mejora Continua | Consultor ISO",
    telefono: "+54 9 11 4170-6692"
  }
};
