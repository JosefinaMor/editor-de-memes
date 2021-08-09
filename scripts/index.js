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
const tipoDeLetra            = document.getElementById("tipo-de-letra");
const tamañoLetra            = document.getElementById("tamaño-letra");
const botonMoverIzquierda    = document.getElementById("boton-izquierda");
const botonMoverCentro       = document.getElementById("boton-centro");
const botonMoverDerecha      = document.getElementById("boton-derecha");


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

const cambiarLetra = () =>{
    let valor = tipoDeLetra.options[tipoDeLetra.selectedIndex];
    valor = valor.value;
    parrafoArriba.style.fontFamily = valor;
    parrafoAbajo.style.fontFamily  = valor;
}
const cambiarTamañoLetra = () =>{
    const valor = tamañoLetra.value;
    console.log(valor);
    parrafoArriba.style.fontSize = valor;
    parrafoAbajo.style.fontSize  = valor;
}
const moverTextoIzquierda = () =>{
    parrafoArriba.style.textAlign = "start";
    parrafoAbajo.style.textAlign = "start";
}

const moverTextoCentro = () =>{
    parrafoArriba.style.textAlign = "center";
    parrafoAbajo.style.textAlign = "center";
}

const moverTextoDerecha = () =>{
    parrafoArriba.style.textAlign = "end";
    parrafoAbajo.style.textAlign = "end";
}

botonModoClaro.onclick    = cambioDeModo;
botonAsideTexto.onclick   = aparecerAsideTexto;
botonAsideImagen.onclick  = aparecerAsideImagen;
botonEscapeTexto.onclick  = salirAsideTexto;
botonEscapeImagen.onclick = salirAsideImagen;
urlImagen.onblur               = insertaImagen;
botonDesaparecerArriba.onclick = desaparecerBloqueTextoArriba;
botonDesaparecerAbajo.oninput  = desaparecerBloqueTextoAbajo;//preguntar por que lo selecciona con la barra espaciadora
contenidoTextoArriba.oninput   = cambiarContenidoArriba;
contenidoTextoAbajo.oninput    = cambiarContenidoAabajo;
tipoDeLetra.oninput = cambiarLetra;
tamañoLetra.onblur = cambiarTamañoLetra;
botonMoverIzquierda.onclick = moverTextoIzquierda;
botonMoverCentro.onclick = moverTextoCentro;
botonMoverDerecha.onclick = moverTextoDerecha;

