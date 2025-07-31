document.addEventListener("DOMContentLoaded", async function mostrarProductosFakeAPI() {
  try {
    const respuesta = await fetch("https://fakestoreapi.com/products");
    if (!respuesta.ok) {
      throw new Error(`Error de servidor: ${respuesta.status}`);
    }

    const productos = await respuesta.json();
    const contenedor = document.getElementById("productos-fake-api");

    productos.forEach((producto) => {
      const card = document.createElement("article");
      card.classList.add("producto-card");

     card.innerHTML = `
  <img src="${producto.image}" alt="${producto.title}">
  <h3>${producto.title}</h3>
  <p>${producto.description}</p>
  <p>$${producto.price}</p>
  <button 
    class="boton-agregar"
    data-id="${producto.id}"
    data-nombre="${producto.title}"
    data-precio="${producto.price}">
    Agregar al Carrito
  </button>
`;


      contenedor.appendChild(card);
    });

  } catch (error) {
    console.error("Error al obtener productos:", error);
    const contenedor = document.getElementById("productos-fake-api");
    contenedor.innerHTML = "<p>Error al cargar los productos. Intenta más tarde.</p>";
  }
});
