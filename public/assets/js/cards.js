const contendCards = document.getElementById('productos-container')

function createCardsProducts(productos){
    productos.forEach(producto => {
        const newVitamin = document.createElement('div')
        newVitamin.classList= 'card-product'
        newVitamin.innerHTML=`
            <img src="/assets/imgs/all-products/${producto.id}.jpg">
            <h3>${producto.name}</h3>
            <p>$${producto.precio}</p>
            <button>Agregar al carrito</button>
        `
        contendCards.appendChild(newVitamin)
    });
}

createCardsProducts(vitaminas)