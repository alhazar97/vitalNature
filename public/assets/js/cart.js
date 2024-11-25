const contendCards = document.getElementById('productos-container')
const unidadesElement = document.getElementById('units')
const precioElement = document.getElementById('price')
const hiddenElement = document.getElementById('carrito-hidden')
const totalElement = document.getElementById('total')
const reiniciarCarritoElement = document.getElementById('reiniciar')


function createCardsProducts() {
    contendCards.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("vitaminas"));
    console.log(productos)
    if(productos && productos.length > 0){
        productos.forEach(producto => {
            const newVitamin = document.createElement("div");
            newVitamin.classList = "card-product"
            newVitamin.innerHTML = `
                <img src="/assets/imgs/all-products/${producto.id}.jpg">
                <h3>${producto.name}</h3>
                <p>$${producto.precio}</p>
                <div>
                    <button>-</button>
                    <span class="cantidad">${producto.cantidad}</span>
                    <button>+</button>
                </div>`;
            contendCards.appendChild(newVitamin);
            newVitamin
                .getElementsByTagName("button")[1]
                .addEventListener("click", (e) => {
                const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0];
                cuentaElement.innerText = addToCart(producto);
                actualizarTotales()
                })
            newVitamin
                .getElementsByTagName("button")[0]
                .addEventListener("click", (e) => {
                    restarAddToCart(producto);
                    createCardsProducts();
                    actualizarTotales()
                });
        });
    }
}
createCardsProducts();
actualizarTotales()

function actualizarTotales(){
    const productos = JSON.parse(localStorage.getItem("vitaminas"));
    let unidades = 0;
    let precio = 0;
    if(productos && productos.length > 0){
        productos.forEach(producto => {
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        })
        unidadesElement.innerText = unidades;
        precioElement.innerText = precio;
    }
    hidden()
}

function hidden(){
    const productos = JSON.parse(localStorage.getItem("vitaminas"));
    hiddenElement.classList.toggle('hidden',productos && productos.length > 0);
    totalElement.classList.toggle('hidden',!(productos && productos.length > 0));
}
hidden()

reiniciarCarritoElement.addEventListener("click", reiniciarCarrito)
function reiniciarCarrito(){
    localStorage.removeItem("vitaminas");
    actualizarTotales();
    createCardsProducts();
}