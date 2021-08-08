const cambioBody             = document.querySelector("body");
const botonModoClaro          = document.getElementById("modo-claro");
const barraNavegacio         = document.getElementById("barraNavegacion");
const botonesDelNav          = document.getElementById("botonesDelNav");
const asideImagen            = document.getElementById("asideImagen");
const asideTexto             = document.getElementById("asideTexto");
const botonAsideTexto        = document.getElementById("botonAsideTexto");
const botonAsideImagen       = document.getElementById("botonAsideImagen");
const botonEscapeTexto       = document.getElementById("botonEscapeTexto");
const botonEscapeImagen      = document.getElementById("botonEscapeImagen");
const fotoMeme               = document.getElementById("foto-meme");//imagen del contenedor principal
const urlImagen              = document.getElementById("url-imagen");//input donde se inerta url de la imagen
const botonDesaparecerArriba = document.getElementById("desaparecer-texto-arriba");//checkbox del input de texto de arriba
const botonDesaparecerAbajo  = document.getElementById("desaparecer-texto-abajo");//checkbox del input de texto de abajo
const textoArriba            = document.getElementById("texto-arriba");//bloque de texto del meme (arriba)
const textoAbajo             = document.getElementById("texto-abajo");//bloque de texto del meme (abajo)
const contenidoTextoArriba   = document.getElementById("contenido-texto-arriba");//input del texto de la parte de arriba
const contenidoTextoAbajo    = document.getElementById("contenido-texto-abajo");//input del texto de la parte de abajo
const parrafoArriba          = document.getElementById("parrafo-arriba");//texto del meme parte de arriba
const parrafoAbajo           = document.getElementById("parrafo-abajo");//texto del meme parte de abajo

const cambioDeModo = () =>{
    cambioBody.classList.toggle("modoClaro");
    barraNavegacion.classList.toggle("modoClaroBarraNavegacion");
    asideImagen.classList.toggle("modoClaro");
    asideTexto.classList.toggle("modoClaro");
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

const desaparecerBloqueTextoArriba = () =>{
    textoArriba.classList.toggle("displayNone");
}

const desaparecerBloqueTextoAbajo = () =>{
    textoAbajo.classList.toggle("displayNone");
}

const cambiarContenidoArriba = () =>{
    const valor = contenidoTextoArriba.value;
    parrafoArriba.textContent = valor;
}

const cambiarContenidoAabajo = () =>{
    const valor = contenidoTextoAbajo.value;
    parrafoAbajo.textContent = valor;
}

botonModoClaro.onclick    = cambioDeModo;
botonAsideTexto.onclick   = aparecerAsideTexto;
botonAsideImagen.onclick  = aparecerAsideImagen;
botonEscapeTexto.onclick  = salirAsideTexto;
botonEscapeImagen.onclick = salirAsideImagen;
urlImagen.onblur               = insertaImagen;
botonDesaparecerArriba.onclick = desaparecerBloqueTextoArriba;
botonDesaparecerAbajo.onclick  = desaparecerBloqueTextoAbajo;
contenidoTextoArriba.oninput   = cambiarContenidoArriba;
contenidoTextoAbajo.oninput    = cambiarContenidoAabajo;

