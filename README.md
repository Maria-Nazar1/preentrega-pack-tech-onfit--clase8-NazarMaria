# Preentrega Pack Tech OnFit

Este proyecto es la Entrega de Proyecto Final obligatoria de E-commerce para el curso de Front - End JS, donde se aplican conceptos fundamentales de HTML y CSS para construir una página web responsiva y funcional, con un enfoque especial en la interactividad y la experiencia de usuario.

**Alumno/a:** [ María Nazar]
## Propósito / Descripción del Proyecto

El objetivo principal de esta página es demostrar la capacidad de estructurar contenido semánticamente con HTML, aplicar estilos profesionales con CSS (incluyendo Flexbox y Grid para el diseño), integrar un formulario de contacto, y asegurar que el diseño sea adaptable a diferentes tamaños de pantalla (`responsive design`).

Las características principales y funcionalidades implementadas en esta pre-entrega incluyen:

* **Página de Inicio (Home):** Un punto de entrada con información relevante sobre el sitio.
* **Sección de Productos:** Presenta una variedad de productos organizados de forma clara y atractiva, utilizando un diseño flexible (`Flexbox`).
* **Sección de Reseñas:** Permite mostrar testimonios o comentarios, organizada eficientemente con `CSS Grid`.
* **Sección de Videos Relacionados:** Incorpora contenido multimedia de forma responsiva.
* **Formulario de Contacto:** Un medio para que los usuarios puedan comunicarse, con campos interactivos y gestión de envío de datos.

### Características Destacadas (últimas actualizaciones):

* **Carrito de Compras Flotante y Adaptable:**
    * Implementación de un carrito de compras dinámico que permite añadir y gestionar productos.
    * **Versión Escritorio:** El carrito se mantiene fijo en el lado derecho de la pantalla, ofreciendo una experiencia de compra continua y accesible.
    * **Versión Móvil/Tabletas:** El carrito se transforma en un **modal más compacto, centrado horizontalmente y posicionado más arriba en la pantalla**, optimizando la usabilidad en dispositivos de menor tamaño.
    * **Optimización del Espacio Visual:** El ícono del carrito y la descripción "Tu Carrito" dentro del modal han sido **achicados y re-posicionados a la derecha** en la versión móvil, lo que mejora la estética y el uso eficiente del espacio en pantallas pequeñas.
    * Funcionalidad de scroll interno para la lista de productos dentro del carrito si el contenido excede su altura máxima, asegurando la visibilidad de todos los elementos.
    * Inclusión de un **fondo oscuro (overlay)** que aparece cuando el carrito modal está activo en móviles, para enfocar la atención del usuario en el carrito.
* **Diseño Responsivo Completo:** Toda la interfaz se adapta fluidamente a diferentes tamaños de pantalla (móviles, tabletas y escritorios) utilizando `Media Queries`, garantizando una experiencia de usuario consistente, accesible y visualmente agradable en cualquier dispositivo.

## Tecnologías Utilizadas

* **HTML5:** Para la estructura semántica y el contenido de la página.
* **CSS3:** Para los estilos visuales, incluyendo:
    * Diseño responsivo (`Media Queries`).
    * Uso de `Flexbox` para layouts flexibles.
    * Uso de `CSS Grid` para el diseño de componentes complejos.
* **JavaScript:** Para la funcionalidad interactiva del carrito de compras (agregar, eliminar, vaciar productos, mostrar/ocultar el modal) y otras interacciones dinámicas.
* **Google Fonts:** Para la tipografía personalizada y profesional.
* **Font Awesome:** Para la integración de íconos escalables (ej. el ícono del carrito de compras).
* **Formspree:** Para la gestión del envío de datos del formulario de contacto.
## Estructura del Proyecto

El proyecto sigue una estructura de carpetas estándar para una organización clara y eficiente, facilitando la navegación y el mantenimiento:
├── css/
│   └── styles.css
├── js/
│   ├── carrito.js
│   └── products.js
├── img/
│   └── [Imágenes del proyecto]
├── index.html
└── README.md