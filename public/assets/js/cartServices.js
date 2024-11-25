function addToCart(producto){
    const memory = JSON.parse(localStorage.getItem("vitaminas"));
    console.log(memory)
    let cuenta = 0;
    if(!memory){
        const newProduct = getNewProductMemory(producto);
        localStorage.setItem("vitaminas", JSON.stringify([newProduct]));
        cuenta = 1;
    }else{
        const indexProduct = memory.findIndex(vitamina => vitamina.id === producto.id);
        console.log(indexProduct)
        const newMemory = memory;
        if(indexProduct === -1){    
            newMemory.push(getNewProductMemory(producto));
            cuenta = 1;
        } else{
            newMemory[indexProduct].cantidad++;
            cuenta = newMemory[indexProduct].cantidad;
        }
        localStorage.setItem("vitaminas", JSON.stringify(newMemory));
    }
    actualizarNumeroCarrito();
    return cuenta;
}
function restarAddToCart (producto){
    const memory = JSON.parse(localStorage.getItem("vitaminas"));
    const indexProduct = memory.findIndex(vitamina => vitamina.id === producto.id);
    if(memory[indexProduct].cantidad === 1){
        memory.splice(indexProduct,1)
    } else{
        memory[indexProduct].cantidad-- ;
    }
    localStorage.setItem("vitaminas", JSON.stringify(memory));
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
    if(memory && memory.length > 0){
    const cuenta = memory.reduce((acum, current) => acum+current.cantidad, 0);
    return cuentaCarritoElement.innerText = cuenta;
    }
    cuentaCarritoElement.innerText = 0
}
actualizarNumeroCarrito()