const productos = [
    {
      nombre: 'TV LG',
      descripcion: 'pantalla de alta resolucion.',
      precio: 9899.99,
      imagen: 'img/img1.jpeg'
    },
    {
      nombre: 'SMART TV',
      descripcion: 'alto constraste en colores.',
      precio: 5989.90,
      imagen: 'img/img2.jpeg'
    },
    {
      nombre: 'SAMSUNG TV',
      descripcion: 'tecnologia de alta gama.',
      precio: 12999.00,
      imagen: 'img/img3.jpeg'
    },
    {
      nombre: 'LG UHD',
      descripcion: 'colores nítidos y atractivos.',
      precio: 14399.00,
      imagen: 'img/img4.jpeg'
    }
  ];
  
  const catalogo = document.getElementById('catalogo');
  
  function crearTarjetaProducto(producto) {
      const card = document.createElement('div');
      card.className = 'producto-card';
  
      const imagen = document.createElement('img');
      imagen.src = producto.imagen;
      imagen.alt = producto.nombre;
  
      const titulo = document.createElement('h2');
      titulo.textContent = producto.nombre;
  
      const descripcion = document.createElement('p');
      descripcion.textContent = producto.descripcion;
  
      const precio = document.createElement('span');
      precio.className = 'precio';
      precio.textContent = `$${producto.precio.toFixed(2)}`;
  
      const boton = document.createElement('button');
      boton.className = 'btn-comprar';
      boton.textContent = 'Comprar';
  
      card.appendChild(imagen);
      card.appendChild(titulo);
      card.appendChild(descripcion);
      card.appendChild(precio);
      card.appendChild(boton);
  
      return card;
  }
  
  function renderizarCatalogo() {
    productos.forEach(producto => {
        const tarjeta = crearTarjetaProducto(producto);
        catalogo.appendChild(tarjeta);
    });
}

window.onload = renderizarCatalogo;