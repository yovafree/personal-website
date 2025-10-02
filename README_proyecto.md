# 🦸‍♂️ Página Web Personal - Dr. Reed Richards

Una página web personal moderna y responsiva desarrollada para el Dr. Reed Richards (Mr. Fantastic de los Cuatro Fantásticos), siguiendo las especificaciones técnicas del archivo de requerimientos.

## 🚀 Características

### ✨ Diseño y Funcionalidades
- **Diseño responsivo** usando CSS Grid y Flexbox
- **Modo oscuro/claro** con toggle automático
- **Navegación suave** con scroll animado
- **Animaciones fluidas** con IntersectionObserver
- **Filtros dinámicos** en el portafolio
- **Formulario de contacto** con validación
- **SEO optimizado** con meta tags apropiados

### 🛠️ Tecnologías Utilizadas
- **HTML5** semántico y accesible
- **CSS3** con Tailwind CSS framework
- **JavaScript ES6+** moderno y optimizado
- **Font Awesome** para iconografía
- **Google Fonts** (Inter) para tipografía

### 📱 Secciones Implementadas
1. **Inicio/Sobre mí** - Biografía y presentación personal
2. **Experiencia Profesional** - Historial laboral y logros
3. **Habilidades Técnicas** - Competencias organizadas por categorías
4. **Portafolio** - Proyectos con filtros dinámicos
5. **Eventos y Charlas** - Participaciones como ponente
6. **Blog/Publicaciones** - Artículos científicos y reflexiones
7. **Contacto** - Formulario funcional e información de contacto

## 🎨 Paleta de Colores

- **Primario**: Azul (#3B82F6)
- **Secundario**: Verde (#10B981)
- **Fondo claro**: Blanco/Gris claro (#F9FAFB)
- **Fondo oscuro**: Gris oscuro (#1F2937)

## 📁 Estructura del Proyecto

```
proyecto/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos personalizados
├── js/
│   └── script.js       # Funcionalidad JavaScript
├── images/             # Imágenes del proyecto
├── vscode/
│   └── mcp.json        # Configuración MCP
└── README.md           # Este archivo
```

## 🖥️ Instalación y Uso

### Prerrequisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desarrollo)

### Ejecutar el Proyecto

#### Opción 1: Apertura Directa
```bash
# Simplemente abre el archivo index.html en tu navegador
open index.html
# o
start index.html
```

#### Opción 2: Servidor Local (Recomendado)
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes npx)
npx serve .

# Con PHP
php -S localhost:8000

# Con VS Code Live Server extension
# Click derecho en index.html > "Open with Live Server"
```

Luego visita `http://localhost:8000` en tu navegador.

## ⚡ Funcionalidades Especiales

### 🧮 Función Fibonacci Integrada
Como se solicitó originalmente, la página incluye una implementación completa de funciones Fibonacci accesibles desde la consola del navegador:

```javascript
// Calcular el n-ésimo número de Fibonacci
fibonacci(10); // Retorna: 55

// Generar serie de n números
fibonacciSeries(10); // Retorna: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Generar números hasta un límite
fibonacciUpToValue(50); // Retorna: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

## ⚡ Funcionalidades Especiales

### 🧮 Función Fibonacci Integrada
Como se solicitó originalmente, la página incluye una implementación completa de funciones Fibonacci accesibles desde la consola del navegador:

```javascript
// Calcular el n-ésimo número de Fibonacci
fibonacci(10); // Retorna: 55

// Generar serie de n números
fibonacciSeries(10); // Retorna: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Generar números hasta un límite
fibonacciUpToValue(50); // Retorna: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

### 🎨 Temas de los Cuatro Fantásticos
Cada miembro del equipo tiene su propio tema de colores:

- **🔵 Reed Richards (Mr. Fantastic)**: Azul - Representa elasticidad y ciencia
- **🟣 Sue Storm (Mujer Invisible)**: Púrpura - Representa campos de fuerza e invisibilidad  
- **🔴 Johnny Storm (Antorcha Humana)**: Rojo/Naranja - Representa fuego y energía
- **🟠 Ben Grimm (La Cosa)**: Naranja/Marrón - Representa fuerza y resistencia

Cambia los temas usando:
```javascript
changeFantasticTheme("reed");   // Tema azul
changeFantasticTheme("sue");    // Tema púrpura
changeFantasticTheme("johnny"); // Tema rojo/naranja
changeFantasticTheme("ben");    // Tema naranja/marrón
```

### 🎮 Easter Eggs Completos

#### 1. **Modo Mr. Fantastic** - Konami Code
Secuencia: `↑ ↑ ↓ ↓ ← → ← → B A`
- Efecto: Animación de estiramiento elástico

#### 2. **Modo Equipo Fantástico** - Secuencia FANTASTIC
Escribe: `FANTASTIC` (con el teclado)
- Efecto: Rotación automática de todos los temas de colores

#### 3. **Poder Cósmico** - Clicks Secretos
Haz click 4 veces consecutivas en "Reed Richards"
- Efecto: Pulso cósmico con partículas estelares

#### 4. **Moléculas Inestables** - Shake del Dispositivo
Agita tu dispositivo móvil (si está disponible)
- Efecto: Vibración molecular y distorsión

#### 5. **Hora Cósmica** - Tiempo Específico
Visita la página exactamente a las 4:44 AM o PM
- Efecto: Inversión temporal de colores por 4.44 segundos

#### 6. **Portal Dimensional** - Scroll Mágico
Haz scroll rápido en patrón zigzag (arriba-abajo-arriba-abajo)
- Efecto: Portal interdimensional con rotación 3D

#### 7. **Selector de Temas F4** - Visual
Usa el selector flotante en la esquina inferior derecha
- Efectos específicos por personaje:
  - **Reed**: Animación de estiramiento
  - **Sue**: Efecto de invisibilidad
  - **Johnny**: Partículas de fuego
  - **Ben**: Impacto rocoso

### 🎯 Filtros de Portafolio
- **Todos**: Muestra todos los proyectos
- **Investigación**: Proyectos científicos
- **Inventos**: Desarrollos tecnológicos
- **Espacial**: Proyectos aeroespaciales
- **Defensa**: Sistemas de protección

## 🔧 Personalización

### Cambiar Colores
Modifica las variables CSS en `css/style.css`:
```css
:root {
    --primary: #3B82F6;
    --secondary: #10B981;
    --dark: #1F2937;
    --light: #F9FAFB;
}
```

### Agregar Nuevos Proyectos
En `index.html`, duplica una tarjeta de proyecto existente y modifica:
```html
<div class="portfolio-card" data-category="nueva-categoria">
    <!-- Contenido del proyecto -->
</div>
```

### Personalizar Animaciones
Las animaciones se controlan en `js/script.js` mediante IntersectionObserver:
```javascript
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
```

## 📊 Rendimiento

- **Tiempo de carga**: < 2 segundos
- **Optimización**: Imágenes lazy loading
- **Accesibilidad**: WCAG 2.1 AA compatible
- **SEO**: Meta tags optimizados

## 🌐 Compatibilidad

### Navegadores Soportados
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### Dispositivos
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Pantallas grandes (1440px+)

## 🔒 Seguridad

- **Validación**: Formularios con validación client-side
- **Sanitización**: Prevención de XSS
- **HTTPS**: Recomendado para producción

## 🚀 Deployment

### GitHub Pages
```bash
git add .
git commit -m "Deploy website"
git push origin main
```

### Netlify
1. Arrastra la carpeta del proyecto a netlify.com
2. ¡Listo!

### Vercel
```bash
npx vercel
```

## 🤝 Contribuciones

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Autor

**Dr. Reed Richards** - *Científico e Inventor*
- 🌐 Website: [www.reedrichards.com](http://localhost:8000)
- 📧 Email: reed.richards@fantastic4.org
- 🐦 Twitter: [@MrFantastic](https://twitter.com)
- 💼 LinkedIn: [reed-richards](https://linkedin.com/in/reed-richards)

## 🙏 Agradecimientos

- **Sue Storm** - Por el diseño de campos de fuerza
- **Johnny Storm** - Por las ideas de efectos visuales
- **Ben Grimm** - Por las pruebas de resistencia
- **Victor Von Doom** - Por la motivación (competencia saludable)

## 📞 Soporte

¿Necesitas ayuda? Contáctanos:

- 📧 **Email**: reed.richards@fantastic4.org
- 📱 **Teléfono**: +1 (555) FANTASTIC
- 🏢 **Dirección**: Edificio Baxter, 42nd Street, Nueva York, NY 10017
- 🚨 **Emergencias Cósmicas**: Disponible 24/7

---

*"La ciencia es la clave para desbloquear los misterios del universo."* - Dr. Reed Richards

**¡Gracias por visitar mi página web personal! 🦸‍♂️**