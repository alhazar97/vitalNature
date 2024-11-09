const contendCards = document.getElementById('productos-container')

function createCardsProducts() {
    const productos = JSON.parse(localStorage.getItem("vitaminas"));
    console.log(productos)
    
        productos.forEach(producto => {
            const newVitamin = document.createElement("div");
            newVitamin.classList = "card-product"
            newVitamin.innerHTML = `
                <img src="/assets/imgs/all-products/${producto.id}.jpg">
                <h3>${producto.name}</h3>
                <p>$${producto.precio}</p>
                <div>
                    <button>-</button>
                    <span class="count">0</span>
                    <button>+</button>
                </div>`
            contendCards.appendChild(newVitamin);
        });
    
}
createCardsProducts();