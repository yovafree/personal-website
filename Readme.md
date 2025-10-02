# Especificación Técnica para Página Web Personal

## Estructura General
- Sitio web de una sola página (HTML5, CSS3, JavaScript ES6+).
- Diseño responsive usando **Flexbox** o **CSS Grid**.
- Secciones:
  - **Inicio / Sobre mí**: Biografía corta con foto de perfil.
  - **Experiencia Profesional**: Roles, proyectos y tecnologías.
  - **Habilidades Técnicas**: Mostradas como etiquetas o íconos de tecnologías.
  - **Portafolio**: Tarjetas de proyectos con título, descripción y enlaces.
  - **Eventos y Charlas**: Lista de conferencias y sesiones en las que participé como ponente.
  - **Blog / Publicaciones**: Espacio para artículos y recursos.
  - **Contacto**: Formulario con nombre, correo, mensaje y enlaces a redes sociales.

## Estilo y Diseño
- Usar **TailwindCSS** o **Bootstrap 5** para un diseño moderno y minimalista.
- Paleta de colores: azul, blanco y gris con acentos en verde.
- Tipografía: Sans-serif (ejemplo: **Inter**, **Roboto**, o **Open Sans**).
- Incluir **modo oscuro/claro** con un botón en el encabezado.

## Funcionalidad
- **Barra de navegación fija** en la parte superior con scroll suave hacia cada sección.
- **Animaciones suaves** (fade-in al hacer scroll usando `IntersectionObserver`).
- Formulario de contacto validado con JavaScript, con integración a **EmailJS** o API.
- Portafolio con **filtros dinámicos** (ejemplo: "Todos", "Web", "Cloud", "Charlas").
- Soporte para **SEO básico** (meta tags, títulos descriptivos).

## Extras
- Incluir archivo `README.md` explicando cómo ejecutar el proyecto.
- Estructura limpia del proyecto: