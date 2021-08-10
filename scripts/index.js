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
const fondoTextoTransparente = document.getElementById("fondo-transparente");
const botonSacarContorno     = document.getElementById("sacar-contorno");
const botonContornoClaro     = document.getElementById("poner-contorno-claro");
const botonContornoOscuro    = document.getElementById("poner-contorno-oscuro");

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
    textoArriba.textContent = valor;
}

const cambiarContenidoAabajo = () =>{
    const valor = contenidoTextoAbajo.value;
    textoAbajo.textContent = valor;
}

const cambiarLetra = () =>{
    let valor = tipoDeLetra.options[tipoDeLetra.selectedIndex];
    valor = valor.value;
    textoArriba.style.fontFamily = valor;
    textofoAbajo.style.fontFamily  = valor;
}

const cambiarTamañoLetra = () =>{
    const valor = tamañoLetra.value;
    textoArriba.style.fontSize = valor +"px";
    textoAbajo.style.fontSize  = valor + "px";
}

const moverTextoIzquierda = () =>{
    textoArriba.style.justifyContent = "start";
    textoAbajo.style.justifyContent = "start";
}

const moverTextoCentro = () =>{
    textoArriba.style.justifyContent = "center";
    textoAbajo.style.justifyContent = "center";
}

const moverTextoDerecha = () =>{
    textoArriba.style.justifyContent = "end";
    textoAbajo.style.justifyContent = "end";
}
const cambiarColorLetra = () =>{
    const valor1 = inputColorLetra.value;
console.log("#"+valor1);
console.log(hola);
    textoArriba.style.color = valor;
    textoAbajo.style.color = valor;
}

const hacerFondoDeTextoTransparente = () =>{
    textoArriba.classList.toggle("transparente");
    textoAbajo.classList.toggle("transparente");
}

botonModoClaro.onclick         = cambioDeModo;
botonAsideTexto.onclick        = aparecerAsideTexto;
botonAsideImagen.onclick       = aparecerAsideImagen;
botonEscapeTexto.onclick       = salirAsideTexto;
botonEscapeImagen.onclick      = salirAsideImagen;
urlImagen.onblur               = insertaImagen;
botonDesaparecerArriba.onclick = desaparecerBloqueTextoArriba;
botonDesaparecerAbajo.oninput  = desaparecerBloqueTextoAbajo;//preguntar por que lo selecciona con la barra espaciadora
contenidoTextoArriba.oninput   = cambiarContenidoArriba;
contenidoTextoAbajo.oninput    = cambiarContenidoAabajo;
tipoDeLetra.oninput            = cambiarLetra;
tamañoLetra.onblur             = cambiarTamañoLetra;
botonMoverIzquierda.onclick    = moverTextoIzquierda;
botonMoverCentro.onclick       = moverTextoCentro;
botonMoverDerecha.onclick      = moverTextoDerecha;
inputColorLetra.onclose        = cambiarColorLetra;
fondoTextoTransparente.oninput = hacerFondoDeTextoTransparente;
