// JavaScript principal para la página personal de Reed Richards

// Ejecutar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades
    initializeNavigation();
    initializeThemeToggle();
    initializeMobileMenu();
    initializeAnimations();
    initializePortfolioFilters();
    initializeContactForm();
    initializeFibonacci();
    initializeFantasticFourThemes();
    initializeAdditionalEasterEggs();
});

// === NAVEGACIÓN ===
function initializeNavigation() {
    // Smooth scrolling para enlaces de navegación
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Ajuste para navbar fija
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Cerrar menú móvil si está abierto
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu.classList.contains('block')) {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('block');
                }
            }
        });
    });
    
    // Resaltar enlace activo en navegación
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

// === TEMA OSCURO/CLARO ===
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Verificar preferencia guardada o usar preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        html.classList.add('dark');
    }
    
    themeToggle.addEventListener('click', function() {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Escuchar cambios en la preferencia del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                html.classList.add('dark');
            } else {
                html.classList.remove('dark');
            }
        }
    });
}

// === MENÚ MÓVIL ===
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('block');
    });
    
    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', function(e) {
        if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('block');
        }
    });
}

// === ANIMACIONES ===
function initializeAnimations() {
    // Intersection Observer para animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observar todos los elementos con clase fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
    
    // Animación de typing para el título principal
    const title = document.querySelector('h1');
    if (title) {
        animateTyping(title);
    }
}

function animateTyping(element) {
    const text = element.textContent;
    element.textContent = '';
    element.style.opacity = '1';
    
    let index = 0;
    const interval = setInterval(() => {
        element.textContent += text[index];
        index++;
        
        if (index >= text.length) {
            clearInterval(interval);
        }
    }, 100);
}

// === FILTROS DE PORTAFOLIO ===
function initializePortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Actualizar botones activos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrar elementos
            portfolioItems.forEach(item => {
                const categories = item.getAttribute('data-category');
                
                if (filter === 'all' || categories.includes(filter)) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// === FORMULARIO DE CONTACTO ===
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = form.querySelector('button[type="submit"]');
    const submitText = submitBtn.querySelector('.submit-text');
    const loadingIcon = submitBtn.querySelector('.loading-icon');
    const formMessage = document.getElementById('form-message');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar formulario
        if (validateForm()) {
            // Mostrar estado de carga
            submitBtn.disabled = true;
            submitText.textContent = 'Enviando...';
            loadingIcon.classList.remove('hidden');
            
            // Simular envío (en un proyecto real, aquí iría la integración con EmailJS o API)
            setTimeout(() => {
                showFormMessage('¡Mensaje enviado correctamente! Te responderé pronto.', 'success');
                form.reset();
                resetFormState();
            }, 2000);
        }
    });
    
    function validateForm() {
        const fields = [
            { id: 'name', message: 'El nombre es requerido' },
            { id: 'email', message: 'El email es requerido' },
            { id: 'message', message: 'El mensaje es requerido' }
        ];
        
        let isValid = true;
        
        fields.forEach(field => {
            const input = document.getElementById(field.id);
            const errorElement = input.nextElementSibling;
            
            if (!input.value.trim()) {
                showFieldError(input, errorElement, field.message);
                isValid = false;
            } else {
                hideFieldError(input, errorElement);
                
                // Validación adicional para email
                if (field.id === 'email' && !isValidEmail(input.value)) {
                    showFieldError(input, errorElement, 'Email no válido');
                    isValid = false;
                }
            }
        });
        
        return isValid;
    }
    
    function showFieldError(input, errorElement, message) {
        input.classList.add('border-red-500');
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
        errorElement.classList.add('show');
    }
    
    function hideFieldError(input, errorElement) {
        input.classList.remove('border-red-500');
        errorElement.classList.add('hidden');
        errorElement.classList.remove('show');
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `p-4 rounded-lg ${type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`;
        formMessage.classList.remove('hidden');
        
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    }
    
    function resetFormState() {
        submitBtn.disabled = false;
        submitText.textContent = 'Enviar Mensaje';
        loadingIcon.classList.add('hidden');
    }
}

// === FUNCIÓN FIBONACCI ===
function initializeFibonacci() {
    // Función Fibonacci como se solicitó originalmente
    function fibonacci(n) {
        if (n <= 1) {
            return n;
        }
        
        let a = 0;
        let b = 1;
        let result = 0;
        
        for (let i = 2; i <= n; i++) {
            result = a + b;
            a = b;
            b = result;
        }
        
        return result;
    }
    
    function fibonacciSeries(n) {
        const series = [];
        for (let i = 0; i < n; i++) {
            series.push(fibonacci(i));
        }
        return series;
    }
    
    function fibonacciUpToValue(limit) {
        const series = [];
        let current = 0;
        let index = 0;
        
        while (current <= limit) {
            current = fibonacci(index);
            if (current <= limit) {
                series.push(current);
            }
            index++;
        }
        
        return series;
    }
    
    // Exponer funciones fibonacci globalmente para demostración
    window.fibonacci = fibonacci;
    window.fibonacciSeries = fibonacciSeries;
    window.fibonacciUpToValue = fibonacciUpToValue;
    
    // Log de demostración en consola
    console.log('🧮 Funciones Fibonacci disponibles:');
    console.log('- fibonacci(n): Calcula el n-ésimo número de Fibonacci');
    console.log('- fibonacciSeries(n): Genera los primeros n números de la serie');
    console.log('- fibonacciUpToValue(limit): Genera números hasta un límite');
    console.log('Ejemplos:');
    console.log('fibonacci(10):', fibonacci(10));
    console.log('fibonacciSeries(10):', fibonacciSeries(10));
    console.log('fibonacciUpToValue(50):', fibonacciUpToValue(50));
    
    console.log('\n🎮 Easter Eggs disponibles:');
    console.log('1. 🎮 Konami Code: ↑↑↓↓←→←→BA - Activa modo Mr. Fantastic');
    console.log('2. ⌨️ Escribe "FANTASTIC" - Activa modo equipo completo');
    console.log('3. 🖱️ Click 4 veces en "Reed Richards" - Activa Poder Cósmico');
    console.log('4. 📱 Agita tu dispositivo móvil - Activa Moléculas Inestables');
    console.log('5. 🕐 Visita a las 4:44 AM/PM - Activa Hora Cósmica');
    console.log('6. 📜 Scroll zigzag rápido - Activa Portal Dimensional');
    console.log('7. 🎨 Selector de temas F4 - Cambia colores por personaje');
    
    console.log('\n🎨 Temas disponibles:');
    console.log('- changeFantasticTheme("reed") - Azul (Reed Richards)');
    console.log('- changeFantasticTheme("sue") - Púrpura (Sue Storm)');
    console.log('- changeFantasticTheme("johnny") - Rojo/Naranja (Johnny Storm)');
    console.log('- changeFantasticTheme("ben") - Naranja/Marrón (Ben Grimm)');
}

// === UTILIDADES ===
// Debounce function para optimizar eventos de scroll
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Función para detectar si es dispositivo móvil
function isMobile() {
    return window.innerWidth < 768;
}

// Función para formatear fechas
function formatDate(date) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return new Date(date).toLocaleDateString('es-ES', options);
}

// === EASTER EGGS ===
// Secuencia de teclas para activar modo "Mr. Fantastic"
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        activateFantasticMode();
        konamiCode = [];
    }
});

function activateFantasticMode() {
    // Easter egg: modo especial con efectos visuales
    document.body.style.animation = 'stretchEffect 2s ease-in-out';
    
    const message = document.createElement('div');
    message.innerHTML = '🦸‍♂️ ¡Modo Mr. Fantastic Activado! 🦸‍♂️';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #3B82F6, #10B981);
        color: white;
        padding: 20px 40px;
        border-radius: 15px;
        font-size: 24px;
        font-weight: bold;
        z-index: 9999;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        animation: bounceIn 1s ease-out;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
        document.body.style.animation = '';
    }, 3000);
}

// CSS para animaciones especiales
const style = document.createElement('style');
style.textContent = `
    @keyframes stretchEffect {
        0%, 100% { transform: scaleX(1); }
        50% { transform: scaleX(1.1); }
    }
    
    @keyframes stretchX {
        0%, 100% { transform: scaleX(1); }
        25% { transform: scaleX(1.3); }
        50% { transform: scaleX(0.7); }
        75% { transform: scaleX(1.2); }
    }
    
    @keyframes fadeInOut {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.1; }
    }
    
    @keyframes flameFlicker {
        0%, 100% { filter: hue-rotate(0deg) brightness(1); }
        25% { filter: hue-rotate(30deg) brightness(1.3); }
        50% { filter: hue-rotate(60deg) brightness(1.1); }
        75% { filter: hue-rotate(45deg) brightness(1.4); }
    }
    
    @keyframes rockSlam {
        0%, 100% { transform: translateY(0); }
        25% { transform: translateY(-10px); }
        50% { transform: translateY(5px); }
        75% { transform: translateY(-5px); }
    }
    
    @keyframes cosmicPulse {
        0%, 100% { 
            filter: brightness(1) saturate(1);
            box-shadow: none;
        }
        50% { 
            filter: brightness(1.5) saturate(2) hue-rotate(180deg);
            box-shadow: 0 0 100px rgba(138, 43, 226, 0.8);
        }
    }
    
    @keyframes molecularShake {
        0%, 100% { transform: translateX(0); }
        10% { transform: translateX(-2px) rotate(1deg); }
        20% { transform: translateX(2px) rotate(-1deg); }
        30% { transform: translateX(-4px) rotate(1deg); }
        40% { transform: translateX(4px) rotate(-1deg); }
        50% { transform: translateX(-2px) rotate(0.5deg); }
        60% { transform: translateX(2px) rotate(-0.5deg); }
        70% { transform: translateX(-1px) rotate(0.5deg); }
        80% { transform: translateX(1px) rotate(-0.5deg); }
        90% { transform: translateX(-0.5px); }
    }
    
    @keyframes dimensionalRift {
        0%, 100% { 
            transform: perspective(1000px) rotateY(0deg);
            filter: blur(0px);
        }
        25% { 
            transform: perspective(1000px) rotateY(15deg);
            filter: blur(2px);
        }
        50% { 
            transform: perspective(1000px) rotateY(-15deg);
            filter: blur(1px);
        }
        75% { 
            transform: perspective(1000px) rotateY(10deg);
            filter: blur(3px);
        }
    }
    
    @keyframes flameParticle {
        0% {
            transform: translateY(0) scale(0);
            opacity: 1;
        }
        50% {
            transform: translateY(-50vh) scale(1);
            opacity: 0.8;
        }
        100% {
            transform: translateY(-100vh) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes cosmicParticle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes portalSpin {
        0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(0);
            opacity: 0;
        }
        25% {
            transform: translate(-50%, -50%) rotate(90deg) scale(1);
            opacity: 1;
        }
        75% {
            transform: translate(-50%, -50%) rotate(270deg) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) rotate(360deg) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes bounceIn {
        0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0; }
        50% { transform: translate(-50%, -50%) scale(1.05); }
        70% { transform: translate(-50%, -50%) scale(0.9); }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    /* Estilos para el selector de temas */
    #theme-selector {
        transition: all 0.3s ease;
    }
    
    #theme-selector:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    }
    
    .theme-btn {
        transition: all 0.2s ease;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    
    .theme-btn:hover {
        box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        border-color: var(--primary);
    }
    
    .theme-btn::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(255,255,255,0.3);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.3s ease;
    }
    
    .theme-btn:active::before {
        width: 100%;
        height: 100%;
    }
`;
document.head.appendChild(style);

// === PERFORMANCE MONITORING ===
// Monitoreo básico de rendimiento
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`⚡ Página cargada en ${loadTime.toFixed(2)}ms`);
    
    // Opcional: enviar métricas de rendimiento
    if ('sendBeacon' in navigator) {
        const metrics = {
            loadTime: loadTime,
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString()
        };
        
        // En un proyecto real, aquí se enviarían las métricas a un servicio de analytics
        console.log('📊 Métricas de rendimiento:', metrics);
    }
});

// === TEMAS DE LOS CUATRO FANTÁSTICOS ===
function initializeFantasticFourThemes() {
    // Definir temas para cada miembro
    const themes = {
        reed: {
            name: 'Reed Richards (Mr. Fantastic)',
            primary: '#3B82F6', // Azul
            secondary: '#1E40AF',
            accent: '#93C5FD',
            gradient: 'from-blue-400 to-blue-600'
        },
        sue: {
            name: 'Sue Storm (Mujer Invisible)',
            primary: '#A855F7', // Púrpura/Violeta
            secondary: '#7C3AED',
            accent: '#C4B5FD',
            gradient: 'from-purple-400 to-purple-600'
        },
        johnny: {
            name: 'Johnny Storm (Antorcha Humana)',
            primary: '#EF4444', // Rojo/Naranja
            secondary: '#DC2626',
            accent: '#FCA5A5',
            gradient: 'from-red-400 to-orange-500'
        },
        ben: {
            name: 'Ben Grimm (La Cosa)',
            primary: '#F97316', // Naranja/Marrón
            secondary: '#EA580C',
            accent: '#FDBA74',
            gradient: 'from-orange-400 to-amber-600'
        }
    };

    let currentTheme = 'reed';

    // Crear selector de temas
    createThemeSelector(themes);

    // Función para cambiar tema
    function changeTheme(themeKey) {
        const theme = themes[themeKey];
        const root = document.documentElement;
        
        // Actualizar variables CSS
        root.style.setProperty('--primary', theme.primary);
        root.style.setProperty('--secondary', theme.secondary);
        
        // Actualizar clases de Tailwind dinámicamente
        updateTailwindClasses(theme);
        
        // Mostrar notificación
        showThemeNotification(theme.name);
        
        // Guardar preferencia
        localStorage.setItem('fantastic-theme', themeKey);
        currentTheme = themeKey;
        
        // Easter egg específico del personaje
        triggerCharacterEasterEgg(themeKey);
    }

    function createThemeSelector(themes) {
        const themeSelector = document.createElement('div');
        themeSelector.id = 'theme-selector';
        themeSelector.className = 'fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-lg border border-gray-200 dark:border-gray-700';
        themeSelector.innerHTML = `
            <div class="text-xs text-gray-600 dark:text-gray-400 mb-2 text-center">Temas F4</div>
            <div class="flex space-x-2">
                ${Object.entries(themes).map(([key, theme]) => `
                    <button class="theme-btn w-8 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:scale-110 transition-transform" 
                            data-theme="${key}" 
                            style="background: linear-gradient(45deg, ${theme.primary}, ${theme.secondary})"
                            title="${theme.name}">
                    </button>
                `).join('')}
            </div>
        `;
        
        document.body.appendChild(themeSelector);

        // Event listeners para los botones de tema
        themeSelector.addEventListener('click', function(e) {
            if (e.target.classList.contains('theme-btn')) {
                const themeKey = e.target.getAttribute('data-theme');
                changeTheme(themeKey);
            }
        });
    }

    function updateTailwindClasses(theme) {
        // Actualizar elementos con colores primarios
        const primaryElements = document.querySelectorAll('.text-primary, .bg-primary, .border-primary');
        primaryElements.forEach(el => {
            el.style.setProperty('color', theme.primary, 'important');
            if (el.classList.contains('bg-primary')) {
                el.style.setProperty('background-color', theme.primary, 'important');
            }
            if (el.classList.contains('border-primary')) {
                el.style.setProperty('border-color', theme.primary, 'important');
            }
        });
    }

    function showThemeNotification(themeName) {
        const notification = document.createElement('div');
        notification.className = 'fixed top-20 right-4 z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-lg transform translate-x-full transition-transform duration-300';
        notification.innerHTML = `
            <div class="flex items-center space-x-3">
                <div class="w-4 h-4 rounded-full" style="background: var(--primary)"></div>
                <span class="text-sm font-medium">Tema: ${themeName}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(full)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    function triggerCharacterEasterEgg(character) {
        const easterEggs = {
            reed: () => stretchAnimation(),
            sue: () => invisibilityEffect(),
            johnny: () => flameEffect(),
            ben: () => rockEffect()
        };
        
        if (easterEggs[character]) {
            easterEggs[character]();
        }
    }

    // Cargar tema guardado
    const savedTheme = localStorage.getItem('fantastic-theme');
    if (savedTheme && themes[savedTheme]) {
        changeTheme(savedTheme);
    }

    // Exponer función globalmente para easter eggs
    window.changeFantasticTheme = changeTheme;
}

// === EASTER EGGS ADICIONALES ===
function initializeAdditionalEasterEggs() {
    // 1. Secuencia "FANTASTIC" para activar modo especial
    let fantasticSequence = '';
    const targetSequence = 'FANTASTIC';
    
    document.addEventListener('keypress', function(e) {
        fantasticSequence += e.key.toUpperCase();
        
        if (fantasticSequence.length > targetSequence.length) {
            fantasticSequence = fantasticSequence.slice(-targetSequence.length);
        }
        
        if (fantasticSequence === targetSequence) {
            activateFantasticTeamMode();
            fantasticSequence = '';
        }
    });

    // 2. Click secreto en el número "4" del logo
    let clickCount = 0;
    document.addEventListener('click', function(e) {
        if (e.target.textContent && e.target.textContent.includes('Reed Richards')) {
            clickCount++;
            if (clickCount === 4) {
                activatePowerCosmicMode();
                clickCount = 0;
            }
        }
    });

    // 3. Shake del dispositivo (si está disponible)
    if ('DeviceMotionEvent' in window) {
        let shakeCount = 0;
        window.addEventListener('devicemotion', function(e) {
            const acceleration = e.accelerationIncludingGravity;
            const totalAcceleration = Math.abs(acceleration.x) + Math.abs(acceleration.y) + Math.abs(acceleration.z);
            
            if (totalAcceleration > 30) {
                shakeCount++;
                if (shakeCount > 3) {
                    activateUnstableMoleculesMode();
                    shakeCount = 0;
                }
            }
        });
    }

    // 4. Secuencia de tiempo específica (4:44 AM/PM)
    setInterval(function() {
        const now = new Date();
        if ((now.getHours() === 4 || now.getHours() === 16) && now.getMinutes() === 44) {
            if (!sessionStorage.getItem('time-easter-egg-shown')) {
                activateCosmicHourMode();
                sessionStorage.setItem('time-easter-egg-shown', 'true');
            }
        }
    }, 60000); // Verificar cada minuto

    // 5. Scroll mágico (scroll rápido arriba y abajo)
    let scrollPattern = [];
    window.addEventListener('scroll', debounce(function() {
        const scrollPosition = window.scrollY;
        scrollPattern.push(scrollPosition);
        
        if (scrollPattern.length > 10) {
            scrollPattern.shift();
        }
        
        // Detectar patrón de scroll rápido arriba-abajo-arriba-abajo
        if (scrollPattern.length >= 8 && isZigzagPattern(scrollPattern)) {
            activateDimensionalRiftMode();
            scrollPattern = [];
        }
    }, 100));

    function isZigzagPattern(pattern) {
        for (let i = 1; i < pattern.length; i++) {
            const direction = pattern[i] > pattern[i-1] ? 'down' : 'up';
            const prevDirection = i > 1 ? (pattern[i-1] > pattern[i-2] ? 'down' : 'up') : null;
            
            if (prevDirection && direction === prevDirection) {
                return false;
            }
        }
        return true;
    }
}

// === EFECTOS DE EASTER EGGS ===
function stretchAnimation() {
    document.body.style.animation = 'stretchX 2s ease-in-out';
    setTimeout(() => document.body.style.animation = '', 2000);
}

function invisibilityEffect() {
    document.body.style.animation = 'fadeInOut 3s ease-in-out';
    showEasterEggMessage('💫 ¡Campo de invisibilidad activado! 💫', 'purple');
}

function flameEffect() {
    document.body.style.animation = 'flameFlicker 2s ease-in-out';
    showEasterEggMessage('🔥 ¡Flame On! 🔥', 'red');
    createFlameParticles();
}

function rockEffect() {
    document.body.style.animation = 'rockSlam 1.5s ease-in-out';
    showEasterEggMessage('🗿 ¡It\'s Clobberin\' Time! 🗿', 'orange');
}

function activateFantasticTeamMode() {
    showEasterEggMessage('⚡ ¡EQUIPO FANTÁSTICO REUNIDO! ⚡', 'gradient');
    
    // Cambiar temas automáticamente cada 2 segundos
    const themes = ['reed', 'sue', 'johnny', 'ben'];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
        window.changeFantasticTheme(themes[currentIndex]);
        currentIndex = (currentIndex + 1) % themes.length;
        
        if (currentIndex === 0) {
            clearInterval(interval);
            setTimeout(() => window.changeFantasticTheme('reed'), 8000);
        }
    }, 2000);
}

function activatePowerCosmicMode() {
    showEasterEggMessage('🌌 ¡PODER CÓSMICO ACTIVADO! 🌌', 'cosmic');
    document.body.style.animation = 'cosmicPulse 5s ease-in-out';
    createCosmicParticles();
}

function activateUnstableMoleculesMode() {
    showEasterEggMessage('⚛️ ¡MOLÉCULAS INESTABLES! ⚛️', 'unstable');
    document.body.style.animation = 'molecularShake 3s ease-in-out';
}

function activateCosmicHourMode() {
    showEasterEggMessage('⏰ ¡HORA CÓSMICA 4:44! ⏰', 'time');
    document.body.style.filter = 'hue-rotate(180deg)';
    setTimeout(() => document.body.style.filter = '', 4440); // 4.44 segundos
}

function activateDimensionalRiftMode() {
    showEasterEggMessage('🌀 ¡PORTAL DIMENSIONAL DETECTADO! 🌀', 'dimensional');
    document.body.style.animation = 'dimensionalRift 4s ease-in-out';
    createPortalEffect();
}

function showEasterEggMessage(message, type) {
    const messageEl = document.createElement('div');
    messageEl.className = 'fixed inset-0 flex items-center justify-center z-[9999] pointer-events-none';
    
    const colors = {
        purple: 'from-purple-400 to-purple-600',
        red: 'from-red-400 to-orange-500',
        orange: 'from-orange-400 to-amber-600',
        gradient: 'from-blue-400 via-purple-500 to-red-500',
        cosmic: 'from-indigo-900 via-purple-500 to-pink-500',
        unstable: 'from-green-400 via-blue-500 to-purple-600',
        time: 'from-yellow-400 via-orange-500 to-red-500',
        dimensional: 'from-cyan-400 via-blue-500 to-purple-600'
    };
    
    messageEl.innerHTML = `
        <div class="bg-gradient-to-r ${colors[type] || colors.gradient} text-white px-8 py-6 rounded-2xl text-2xl font-bold shadow-2xl animate-bounce transform scale-110">
            ${message}
        </div>
    `;
    
    document.body.appendChild(messageEl);
    
    setTimeout(() => messageEl.remove(), 4000);
}

function createFlameParticles() {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'fixed pointer-events-none z-[9998]';
        particle.style.cssText = `
            width: 6px;
            height: 6px;
            background: radial-gradient(circle, #ff4500, #ff6b35);
            border-radius: 50%;
            left: ${Math.random() * 100}vw;
            top: 100vh;
            animation: flameParticle ${2 + Math.random() * 3}s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 5000);
    }
}

function createCosmicParticles() {
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'fixed pointer-events-none z-[9998]';
        particle.style.cssText = `
            width: 4px;
            height: 4px;
            background: radial-gradient(circle, #ffffff, #b4c6fc);
            border-radius: 50%;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            animation: cosmicParticle ${3 + Math.random() * 4}s ease-out forwards;
            box-shadow: 0 0 10px #ffffff;
        `;
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 7000);
    }
}

function createPortalEffect() {
    const portal = document.createElement('div');
    portal.className = 'fixed pointer-events-none z-[9998]';
    portal.style.cssText = `
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: conic-gradient(from 0deg, #00ffff, #ff00ff, #ffff00, #00ffff);
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: portalSpin 4s linear;
        box-shadow: 0 0 50px #00ffff, inset 0 0 50px #ff00ff;
    `;
    
    document.body.appendChild(portal);
    setTimeout(() => portal.remove(), 4000);
}