const contendCards = document.getElementById('productos-container')

const cover_ctn_search = document.getElementById("cover-ctn-search");
const searchInput = document.getElementById("inputSearch");

const noResults = document.getElementById('noResults')

function createCardsProducts(productos){
    contendCards.innerHTML="";
    if(productos.length === 0){
        noResults.style.display = "block";
    }
    else{
        productos.forEach(producto => {
            const newVitamin = document.createElement("div");
            newVitamin.classList= "card-product"
            newVitamin.innerHTML=`
                <img src="/assets/imgs/all-products/${producto.id}.jpg">
                <h3>${producto.name}</h3>
                <p>$${producto.precio}</p>
                <button>Agregar al carrito</button>`
            contendCards.appendChild(newVitamin);
            newVitamin.getElementsByTagName("button")[0].addEventListener("click", ()=> addToCart(producto))
        });
        noResults.style.display = "none";
    }
}
createCardsProducts(vitaminas);

function handleSearch () {
    const searchTerm = inputSearch.value.toLowerCase()
    const filteredProducts = vitaminas.filter((product) => product.name.toLowerCase().startsWith(searchTerm))
    
    createCardsProducts(filteredProducts)
}
createCardsProducts(vitaminas)

inputSearch.addEventListener("input", handleSearch)

/*componentes icon-search */

document.getElementById("icon-search").addEventListener("click", mostrarSearch);
document.getElementById("cover-ctn-search").addEventListener("click", ocultarSearch);


function mostrarSearch() {
    searchInput.style.display = "block"; 
    searchInput.style.zIndex = "1";
    
    cover_ctn_search.style.display = "block";
     searchInput.focus();
    box_search.style.display = "block"; 
}
function ocultarSearch(){
    searchInput.style.display = "none"; 
    searchInput.value = "";
    cover_ctn_search.style.display = "none"
}