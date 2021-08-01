const cambioBody      = document.querySelector("body");
const botonModoClaro  = document.getElementById("modo-claro");
const barraNavegacion = document.getElementById("barraNavegacion");
const asideImagen     = document.getElementById("asideImagen");
const asideTexto      = document.getElementById("asideTexto");

const cambioDeModo = () =>{
    cambioBody.classList.toggle("modoClaro");
    barraNavegacion.classList.toggle("modoClaroBarraNvegacion");
    asideImagen.classList.toggle("modoClaroAside");
    asideTexto.classList.toggle("modoClaroAside");
}

botonModoClaro.onclick = cambioDeModo;