# Web profesional — Ingeniería de procesos y herrería de proyectos

Front estático (HTML + CSS + JS), sin backend ni dependencias.

## Editar contenido
Todo el texto, servicios, proyectos, datos de contacto y el crédito se editan en **`content.js`**.
- Fotos de proyectos: guardarlas en `img/` y poner la ruta en `imagen` (ej. `"img/estanteria.jpg"`).
- Ocultar la cinta de vista previa: `preview: false`.
- Los datos marcados `EJEMPLO` (LinkedIn, WhatsApp, email, cifras) son provisorios.

## Ver en local
Abrir `index.html` en el navegador.

## Publicar
GitHub Pages (Settings → Pages → rama `main`, carpeta raíz). Dominio propio: agregar archivo `CNAME` con el dominio y apuntar el DNS.

Desarrollado por Mgter. Diego Ortiz — Líder de Mejora Continua | Consultor ISO

## Asistente de consultas
El botón "Consultá acá" abre un chat guiado. Preguntas y opciones se editan en `content.js` (bloque `bot`). Al final arma un resumen que se envía por WhatsApp o email; el sitio no guarda nada.

## Medición (Google Analytics 4)
1. Crear una propiedad en analytics.google.com y un flujo de datos web con la URL del sitio.
2. Copiar el ID de medición (`G-XXXXXXXXXX`) y pegarlo en `content.js`, campo `analitica.ga4`.
3. En GA4 → Administrar → Eventos, marcar como eventos clave: `bot_consulta_completa`, `click_whatsapp`, `click_llamar`, `click_email`, `form_whatsapp_enviado`.
4. Para ver el informe mensual, conectar la propiedad a Looker Studio.
5. En los links que se publican (LinkedIn, firma de email) agregar `?utm_source=linkedin&utm_medium=social&utm_campaign=nombre` para saber de dónde llega cada visita.
