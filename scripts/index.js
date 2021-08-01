const cambioBody       = document.querySelector("body");
const botonModoClaro   = document.getElementById("modo-claro");
const barraNavegacion  = document.getElementById("barraNavegacion");
const asideImagen      = document.getElementById("asideImagen");
const asideTexto       = document.getElementById("asideTexto");
const botonAsideTexto  = document.getElementById("botonAsideTexto");
const botonAsideImagen = document.getElementById("botonAsideImagen");
const botonEscape      = document.getElementById("botonEscape");

const cambioDeModo = () =>{
    cambioBody.classList.toggle("modoClaro");
    barraNavegacion.classList.toggle("modoClaroBarraNvegacion");
    asideImagen.classList.toggle("modoClaroAside");
    asideTexto.classList.toggle("modoClaroAside");
}

const aparecerAsideTexto = () =>{
    asideTexto.classList.toggle("mostrarAside"); 
    asideImagen.classList.remove("mostrarAside");
}

const aparecerAsideImagen = () =>{
    asideImagen.classList.toggle("mostrarAside"); 
    asideTexto.classList.remove("mostrarAside");
}

botonModoClaro.onclick   = cambioDeModo;
botonAsideTexto.onclick  = aparecerAsideTexto;
botonAsideImagen.onclick = aparecerAsideImagen;
