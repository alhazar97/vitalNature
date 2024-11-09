function addToCart(producto){
    const memory = JSON.parse(localStorage.getItem("vitaminas"));
    console.log(memory)
    if(!memory){
        const newProduct = getNewProductMemory(producto);
        localStorage.setItem("vitaminas", JSON.stringify([newProduct]));
    }else{
        const indexProduct = memory.findIndex(vitamina => vitamina.id === producto.id);
        console.log(indexProduct)
        const newMemory = memory;
        if(indexProduct === -1){    
            newMemory.push(getNewProductMemory(producto));
        } else{
            newMemory[indexProduct].cantidad++ ;
        }
        localStorage.setItem("vitaminas", JSON.stringify(newMemory));
    }
    actualizarNumeroCarrito();
}
/*Toma un producto para memoria y lo devuelve */
function getNewProductMemory(producto){
    const newProduct = producto;
    newProduct.cantidad = 1;
    return newProduct
}

const cuentaCarritoElement = document.getElementById("cuenta-carrito");
function actualizarNumeroCarrito(){
    const memory = JSON.parse(localStorage.getItem("vitaminas"));
    const cuenta = memory.reduce((acum, current) => acum+current.cantidad, 0);
    cuentaCarritoElement.innerText = cuenta;
}
actualizarNumeroCarrito()