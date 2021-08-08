const cambioBody        = document.querySelector("body");
const botonModoClaro    = document.getElementById("modo-claro");
const barraNavegacion   = document.getElementById("barraNavegacion");
const botonesDelNav     = document.getElementById("botonesDelNav");
const asideImagen       = document.getElementById("asideImagen");
const asideTexto        = document.getElementById("asideTexto");
const botonAsideTexto   = document.getElementById("botonAsideTexto");
const botonAsideImagen  = document.getElementById("botonAsideImagen");
const botonEscapeTexto  = document.getElementById("botonEscapeTexto");
const botonEscapeImagen = document.getElementById("botonEscapeImagen");
const fotoMeme          = document.getElementById("foto-meme");
const urlImagen         = document.getElementById("url-imagen");

const cambioDeModo = () =>{
    cambioBody.classList.toggle("modoClaro");
    barraNavegacion.classList.toggle("modoClaroBarraNvegacion");
    asideImagen.classList.toggle("modoClaroAside");
    asideTexto.classList.toggle("modoClaroAside");
    botonesDelNav.classList.toggle("modoClaroLi");
}

const insertaImagen = () =>{
    const valor = urlImagen.value;
    fotoMeme.src = valor;
}

const aparecerAsideTexto = () =>{
    asideTexto.classList.toggle("mostrarAside"); 
    asideImagen.classList.remove("mostrarAside");
    botonAsideTexto.classList.toggle("remarcoBoton");
    botonAsideImagen.classList.remove("remarcoBoton");
}

const aparecerAsideImagen = () =>{
    asideImagen.classList.toggle("mostrarAside"); 
    asideTexto.classList.remove("mostrarAside");
    botonAsideImagen.classList.toggle("remarcoBoton");
    botonAsideTexto.classList.remove("remarcoBoton");
}

const salirAsideTexto = () =>{
    asideTexto.classList.remove("mostrarAside");
    botonAsideTexto.classList.remove("remarcoBoton");
}

const salirAsideImagen = () =>{
    asideImagen.classList.remove("mostrarAside");
    botonAsideImagen.classList.remove("remarcoBoton");
}

botonModoClaro.onclick    = cambioDeModo;
botonAsideTexto.onclick   = aparecerAsideTexto;
botonAsideImagen.onclick  = aparecerAsideImagen;
botonEscapeTexto.onclick  = salirAsideTexto;
botonEscapeImagen.onclick = salirAsideImagen;
urlImagen.onblur          = insertaImagen;