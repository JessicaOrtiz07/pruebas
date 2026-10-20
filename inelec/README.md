# INELEC · Sitio web

Página de una sola vista (landing) en HTML, CSS y JavaScript sin dependencias ni compilación.

## Estructura

```
inelec/
├── index.html                     Página principal
├── assets/
│   ├── css/styles.css             Todos los estilos
│   ├── js/main.js                 Menú móvil
│   └── images/
│       ├── logo/
│       │   ├── logo-inelec.png            Favicon
│       │   └── logo-inelec-eslogan.jpg    Logo del encabezado
│       ├── backgrounds/
│       │   └── hero-camara.png            Fondo del banner principal
│       └── content/
│           └── hvac-limpieza-difusor.png  Foto de limpieza de difusor (sin uso por ahora)
└── README.md
```

## Cómo verla

Abre `index.html` en el navegador, o sírvela localmente:

```
python3 -m http.server 8000
```

y visita http://localhost:8000.

## Rutas

- El HTML usa rutas relativas a la raíz del proyecto (`assets/...`).
- El CSS referencia imágenes de forma relativa a sí mismo (`../images/...`).
- Si añades páginas en una subcarpeta (por ejemplo `pages/`), sus rutas deben empezar con `../assets/...`.

## Uso dentro de WordPress / Elementor

Sube `assets/` al servidor respetando la estructura de carpetas (el CSS toma la imagen del banner de `../images/backgrounds/`), carga `styles.css` y `main.js` desde el tema o con un plugin de código, y pega el contenido del `<body>` en un bloque "HTML personalizado".

## Contacto

El botón "Solicitar asesoría" abre el correo `ventas@inelecsoluciones.com.mx`.
