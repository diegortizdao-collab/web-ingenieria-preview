/* ============================================================
   CONTENIDO DEL SITIO — único archivo a editar.
   Todo lo marcado "EJEMPLO" es provisorio para la previsualización.
   ============================================================ */
window.SITE = {
  preview: true, // false = oculta la cinta "vista previa"

  marca: {
    nombre: "Javier [Apellido]",
    cargo: "Ingeniero de Procesos",
    firma: "Estanterías, escaleras, elevadores y karakuri para la industria",
    linkedin: "https://www.linkedin.com/in/usuario-ejemplo/", // EJEMPLO
    whatsapp: "5491100000000",                                // EJEMPLO
    email: "contacto@dominio-ejemplo.com.ar",                 // EJEMPLO
    ciudad: "Buenos Aires, Argentina"
  },

  hero: {
    eyebrow: "Ingeniería de procesos · Herrería de proyectos",
    titulo: "Almacenar, subir y mover. Resuelto a medida.",
    bajada: "Diseño y fabricación de estanterías, escaleras, elevadores y mecanismos karakuri para que tu planta mueva material con menos esfuerzo, menos tiempo y más seguridad.",
    cta1: "Pedir presupuesto",
    cta2: "Ver proyectos",
    stats: [ // EJEMPLO
      { valor: "15+", etiqueta: "años en industria" },
      { valor: "120", etiqueta: "proyectos entregados" },
      { valor: "48 h", etiqueta: "respuesta a consultas" }
    ]
  },

  servicios: [
    { icono: "rack",    titulo: "Estanterías industriales", texto: "Racks y estanterías a medida para piezas, matrices y materia prima, con carga calculada y señalización de capacidad." },
    { icono: "stairs",  titulo: "Escaleras y pasarelas", texto: "Escaleras, plataformas y barandas dimensionadas según norma, para acceder a máquinas y entrepisos con seguridad." },
    { icono: "lift",    titulo: "Elevadores y plataformas", texto: "Elevadores de carga y mesas elevadoras que eliminan el levantamiento manual en el puesto de trabajo." },
    { icono: "karakuri", titulo: "Karakuri", texto: "Mecanismos de automatización de bajo costo, sin electricidad: gravedad, palancas y levas que mueven el material por vos." },
    { icono: "layout",  titulo: "Ingeniería de procesos", texto: "Relevamiento, layout y balance de línea para decidir qué fabricar antes de cortar el primer perfil." },
    { icono: "check",   titulo: "Documentación técnica", texto: "Planos, memorias de cálculo y manuales de uso listos para auditorías de calidad y seguridad." }
  ],

  proyectos: [ // EJEMPLO — reemplazar por fotos reales (carpeta /img)
    { titulo: "Estantería de matrices", rubro: "Estanterías", anio: "2025", dato: "8 niveles · 2 t por nivel", imagen: "" },
    { titulo: "Karakuri de alimentación por gravedad", rubro: "Karakuri", anio: "2025", dato: "Sin energía eléctrica", imagen: "" },
    { titulo: "Escalera con plataforma de servicio", rubro: "Escaleras", anio: "2024", dato: "Norma IRAM 4004", imagen: "" },
    { titulo: "Elevador de bobinas", rubro: "Elevadores", anio: "2024", dato: "Capacidad 500 kg", imagen: "" },
    { titulo: "Estantería dinámica FIFO", rubro: "Estanterías", anio: "2024", dato: "−40 % de búsqueda", imagen: "" },
    { titulo: "Karakuri de transferencia de caja", rubro: "Karakuri", anio: "2023", dato: "−1 operario por turno", imagen: "" }
  ],

  proceso: [
    { titulo: "Relevamiento", texto: "Visita a planta, medición del flujo de material y definición del alcance con criterios de aceptación claros." },
    { titulo: "Ingeniería", texto: "Cálculo, planos de fabricación y cronograma aprobado antes de empezar a fabricar." },
    { titulo: "Fabricación", texto: "Control dimensional en cada etapa y registro fotográfico del avance." },
    { titulo: "Montaje", texto: "Instalación coordinada con tu producción y entrega con documentación completa." }
  ],

  sobreMi: {
    titulo: "Ingeniería con las manos en la planta",
    parrafos: [
      "Soy ingeniero de procesos y trabajo con empresas industriales que necesitan resolver un problema concreto de almacenaje, acceso o movimiento de material con una solución construida a medida.",
      "Combino el análisis del proceso con la fabricación en taller, para que lo que se diseña sea lo que se monta y funciona."
    ],
    puntos: ["Ingeniería de procesos", "Cálculo y diseño estructural", "Fabricación y montaje", "Karakuri y Lean"]
  },

  contacto: {
    titulo: "Contame qué necesitás",
    texto: "Describí brevemente el proyecto y te respondo con los próximos pasos."
  },

  credito: {
    texto: "Desarrollado por Mgter. Diego Ortiz — Líder de Mejora Continua | Consultor ISO",
    telefono: "+54 9 11 4170-6692"
  }
};
