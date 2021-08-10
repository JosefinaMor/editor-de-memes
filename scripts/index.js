const cambioBody             = document.querySelector("body");
const botonModoClaro         = document.getElementById("modo-claro");
const barraNavegacion        = document.getElementById("barra-navegacion");
const botonesDelNav          = document.getElementById("botones-del-nav");
const asideImagen            = document.getElementById("aside-imagen");
const asideTexto             = document.getElementById("aside-texto");
const botonAsideTexto        = document.getElementById("boton-aside-texto");
const botonAsideImagen       = document.getElementById("boton-aside-imagen");
const botonEscapeTexto       = document.getElementById("boton-escape-texto");
const botonEscapeImagen      = document.getElementById("boton-escape-imagen");
const conteinerMeme          = document.getElementById("conteiner-meme");//imagen del contenedor principal
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
const inputColorLetra        = document.getElementById("input-color-letra");

const cambioDeModo = () =>{
    cambioBody.classList.toggle("modoClaro");
    barraNavegacion.classList.toggle("modo-claro-barra-navegacion");
    asideImagen.classList.toggle("modoClaro");
    asideTexto.classList.toggle("modoClaro");
    botonesDelNav.classList.toggle("modoClaroLi");
}

const insertaImagen = () =>{
    const valor = urlImagen.value;
    conteinerMeme.style.backgroundImage = "url(" + valor +")";//cambiar por fondo url
}

const aparecerAsideTexto = () =>{
    asideTexto.classList.toggle("mostrar"); 
    asideImagen.classList.remove("mostrar");
    botonAsideTexto.classList.toggle("remarco-boton");
    botonAsideImagen.classList.remove("remarco-boton");
}

const aparecerAsideImagen = () =>{
    asideImagen.classList.toggle("mostrar"); 
    asideTexto.classList.remove("mostrar");
    botonAsideImagen.classList.toggle("remarco-boton");
    botonAsideTexto.classList.remove("remarco-boton");
}

const salirAsideTexto = () =>{
    asideTexto.classList.remove("mostrar");
    botonAsideTexto.classList.remove("remarco-boton");
}

const salirAsideImagen = () =>{
    asideImagen.classList.remove("mostrar");
    botonAsideImagen.classList.remove("remarco-boton");
}

const desaparecerBloqueTextoArriba = () =>{
    textoArriba.classList.toggle("desaparecer");
}

const desaparecerBloqueTextoAbajo = () =>{
    textoAbajo.classList.toggle("desaparecer");
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
    parrafoArriba.style.fontSize = valor +"px";
    textoAbajo.style.fontSize  = valor + "px";
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
const cambiarColorLetra = () =>{
    const valor1 = inputColorLetra.select(inputColorLetra.value);
console.log(valor1);
    console.log(valor);
    textoArriba.style.color = valor;
    textoAbajo.style.color = valor;
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
inputColorLetra.oninput = cambiarColorLetra;
