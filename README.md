# Módulo de Hojas de Vida de Estudiantes

## Descripción
Este módulo web permite visualizar las hojas de vida de los estudiantes del curso, emulando el estilo del campus virtual de la Universidad del Magdalena.

## Estructura del Proyecto

```
Modulo_Estudiantes/
├── index.html          # Página principal con estructura HTML5 semántica
├── css/
│   └── styles.css      # Estilos CSS externos
├── images/             # Directorio para imágenes
│   ├── Escudo_unimag_sm.png    # Logo del campus virtual
│   └── profile-photo.png       # Avatar del usuario
└── README.md           # Este archivo
```

## Características

### HTML5 Semántico
- Uso de elementos semánticos: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`
- Estructura clara y accesible
- Metadatos apropiados

### Estilos CSS Externos
- Todos los estilos en archivo `css/styles.css` separado
- Sin estilos inline
- Diseño responsive con media queries
- Comentarios organizados por secciones

### Componentes Implementados
1. **Header**: Logo de la Universidad del Magdalena y navegación superior con iconos
2. **Menú de navegación**: Barra azul con enlaces del curso
3. **Barra de búsqueda**: Campo de búsqueda con opciones
4. **Grid de estudiantes**: 3 columnas (responsive)
5. **Tarjetas de estudiante**: Icono de usuario, nombre, rol, botón "Ver" y redes sociales

## Instrucciones de Uso

### 1. Iconos de Usuario por Defecto
Todas las tarjetas de estudiantes muestran un **icono de usuario por defecto** (Font Awesome). Esto permite que la página funcione inmediatamente sin necesidad de imágenes.

**Para reemplazar los iconos con fotos reales:**

En el archivo `index.html`, busca cada tarjeta de estudiante y reemplaza:
```html
<div class="student-photo-icon"><i class="fas fa-user-circle"></i></div>
```

Por:
```html
<img src="images/nombre-estudiante.jpg" alt="Nombre del Estudiante" class="student-photo">
```

### 2. Personalizar Contenido
Edita el archivo `index.html` para actualizar:

- Nombres de estudiantes
- Roles/posiciones
- Enlaces de redes sociales
- Nombre del usuario en el header

### 3. Abrir la Página
Simplemente abre el archivo `index.html` en tu navegador web preferido.

## Diseño Responsive

El diseño se adapta a diferentes tamaños de pantalla:

- **Desktop (>1200px)**: 3 columnas de tarjetas
- **Tablet (768px-1200px)**: 2 columnas de tarjetas
- **Mobile (<768px)**: 1 columna de tarjetas

## Colores del Campus Virtual

- **Azul primario**: #0066A1 (header, botones)
- **Azul oscuro**: #004B87 (hover effects)
- **Blanco**: #ffffff (fondos de tarjetas)
- **Gris claro**: #f5f5f5 (fondo general)

## Tecnologías Utilizadas

- HTML5
- CSS3
- Font Awesome 6.0 (iconos)

## Estudiantes del Curso

Actualmente el módulo muestra las siguientes personas:
- Julio Curiel
- Daniel Jimenez
- Juan Gonzalez
- Ana Lopez
- Jose Orozco
- Sara Jimenez
- Yulieth Ortega
- Jordan Caro
- Shania Russo

## Notas

- Los iconos de usuario son de Font Awesome y se muestran automáticamente
- Para usar fotos reales, deben ser cuadradas para mejor visualización
- Tamaño para fotos: 200x200px mínimo
- Formato: JPG o PNG
