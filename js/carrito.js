// carrito.js

// Elementos del DOM que vamos a necesitar
const carritoSection = document.getElementById('carrito');
const iconoCarritoHeader = document.querySelector('header .carrito a');
const cerrarCarritoBtn = document.getElementById('cerrar-carrito');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const botonPagar = document.getElementById('boton-pagar');
const carritoOverlay = document.getElementById('carrito-overlay'); // <-- NUEVO: Referencia al overlay

// Inicialización al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    inicializarEventos();
    actualizarCarrito();
    ocultarCarrito(); // <-- DESCOMENTADO: OCULTA EL CARRITO Y EL OVERLAY AL CARGAR LA PÁGINA
});

// Agrega event listeners usando delegación de eventos para los botones "Agregar"
function inicializarEventos() {
    document.body.addEventListener('click', (event) => {
        const botonAgregarProducto = event.target.closest('.boton-agregar');

        if (botonAgregarProducto) {
            const id = parseInt(botonAgregarProducto.dataset.id);
            const nombre = botonAgregarProducto.dataset.nombre;
            const precio = parseFloat(botonAgregarProducto.dataset.precio);

            agregarAlCarrito({ id, nombre, precio });
            mostrarCarrito(); // Mostrar el carrito automáticamente al agregar un producto
        }
    });

    if (vaciarCarritoBtn) {
        vaciarCarritoBtn.addEventListener("click", () => {
            localStorage.removeItem("carrito");
            actualizarCarrito();
            // No ocultamos el carrito automáticamente al vaciarlo, pero podrías hacerlo si lo prefieres
        });
    }

    if (iconoCarritoHeader) {
        iconoCarritoHeader.addEventListener('click', (event) => {
            event.preventDefault();
            toggleCarrito(); // Alternar la visibilidad del carrito y el overlay
        });
    }

    if (cerrarCarritoBtn) {
        cerrarCarritoBtn.addEventListener('click', ocultarCarrito);
    }

    // <-- NUEVO: Cierra el carrito si se hace clic en el overlay (fondo oscuro)
    if (carritoOverlay) {
        carritoOverlay.addEventListener('click', ocultarCarrito);
    }

    if (botonPagar) {
        botonPagar.addEventListener('click', () => {
            alert('¡Pago procesado con éxito! Gracias por tu compra.');
            localStorage.removeItem("carrito");
            actualizarCarrito();
            ocultarCarrito(); // Ocultar el carrito y el overlay después del pago
        });
    }
}

// --- FUNCIONES CLAVE PARA LA VISIBILIDAD Y EL OVERLAY ---

function mostrarCarrito() {
    if (carritoSection) {
        carritoSection.style.display = 'flex';
        // Mostrar el overlay cuando el carrito se muestra
        if (carritoOverlay) {
            carritoOverlay.classList.add('overlay-activo'); // Usa la clase para activar el overlay
        }
    }
}

function ocultarCarrito() {
    if (carritoSection) {
        carritoSection.style.display = 'none';
        // Ocultar el overlay cuando el carrito se oculta
        if (carritoOverlay) {
            carritoOverlay.classList.remove('overlay-activo'); // Quita la clase para ocultar el overlay
        }
    }
}

function toggleCarrito() {
    // Si el carrito está oculto (o su estilo no está definido), lo muestra
    if (carritoSection.style.display === 'none' || carritoSection.style.display === '') {
        mostrarCarrito();
    } else { // Si está visible, lo oculta
        ocultarCarrito();
    }
}

// --- RESTO DE FUNCIONES (control de cantidad, almacenamiento local) ---

function agregarAlCarrito(productoNuevo) {
    let carrito = obtenerCarrito();
    const productoExistente = carrito.find(p => p.id === productoNuevo.id);

    if (productoExistente) {
        productoExistente.cantidad = (productoExistente.cantidad || 1) + 1;
    } else {
        productoNuevo.cantidad = 1;
        carrito.push(productoNuevo);
    }

    guardarCarrito(carrito);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carrito = obtenerCarrito();
    const lista = document.getElementById("lista-carrito");
    lista.innerHTML = "";

    if (carrito.length === 0) {
        const li = document.createElement("li");
        li.textContent = "El carrito está vacío.";
        lista.appendChild(li);
    } else {
        carrito.forEach(producto => {
            const li = document.createElement("li");
            const cantidadTexto = producto.cantidad > 1 ? ` (x${producto.cantidad})` : '';
            li.textContent = `${producto.nombre}${cantidadTexto} - $${(producto.precio * producto.cantidad).toFixed(2)}`;
            lista.appendChild(li);
        });
    }
}

function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}