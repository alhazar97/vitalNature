document.getElementById("icon-search").addEventListener("click", mostrarSearch);
document.getElementById("cover-ctn-search").addEventListener("click", ocultarSearch);

const bars_search = document.getElementById("ctn-bars-search");
const cover_ctn_search = document.getElementById("cover-ctn-search");
const inputSearch = document.getElementById("inputSearch");
const box_search = document.getElementById("box-search");

function mostrarSearch() {
    inputSearch.style.display = "block"; 
    inputSearch.style.zIndex = "1";
    cover_ctn_search.style.display = "block";
    /* inputSearch.focus();
    box_search.style.display = "block"; */
}
function ocultarSearch(){
    inputSearch.style.display = "none"; 
    inputSearch.value = "";
    cover_ctn_search.style.display = "none"
}

// filtrado de busqueda
const handleSearch = () => {
    const searchTerm = inputSearch.value.toLowerCase()
    const filteredProducts = vitaminas.filter((product) => product.name.toLowerCase().startsWith(searchTerm))
    
    createCardsProducts(filteredProducts)
}
createCardsProducts(vitaminas)

inputSearch.addEventListener("input", handleSearch)


