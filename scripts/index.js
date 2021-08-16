//señalizacion de partes para el modo claro
const cambioBody             = document.querySelector("body");
const barraNavegacion        = document.getElementById("barra-navegacion");
const botonesDelNav          = document.getElementById("botones-del-nav");
const asideImagen            = document.getElementById("aside-imagen");
const asideTexto             = document.getElementById("aside-texto");
const divInputColor          = document.querySelector(".input-color");
const divInputColorLetra     = document.getElementById("div-input-letra");
const divInputColorFondo     = document.getElementById("div-input-fondo");

//señalizacion de botones del nav
const botonModoClaro         = document.getElementById("modo-claro");
const botonAsideTexto        = document.getElementById("boton-aside-texto");
const botonAsideImagen       = document.getElementById("boton-aside-imagen");

//señalizacion de partes a cambiar en el div del meme
const colorFondoMeme         = document.getElementById("fondo-meme");
const textoArriba            = document.getElementById("texto-arriba");
const textoAbajo             = document.getElementById("texto-abajo");
const conteinerMeme          = document.getElementById("conteiner-meme");

//señalizacion de botones e inputs del aside imagen
const botonEquisImagen      = document.getElementById("boton-equis-imagen");

    //input de url imagen
const urlImagen              = document.getElementById("url-imagen");

    //opciones de fondo cambios en la imagen
const inputColorParaBlend    = document.getElementById("input-color-para-blend");
const modoBlendFondoEImagen  = document.getElementById("modo-blend-fondo-e-imagen");

    //filtros
const inputRangoBrillo       = document.getElementById("rango-brillo");
const inputRangoOpacidad     = document.getElementById("rango-opacidad");
const inputRangoContraste    = document.getElementById("rango-contraste");
const inputRangoDesenfoque   = document.getElementById("rango-desenfoque");
const inputRangoGrises       = document.getElementById("rango-grises");
const inputRangoSepia        = document.getElementById("rango-sepia");
const inputRangoHue          = document.getElementById("rango-hue");
const inputRangoSaturado     = document.getElementById("rango-saturado");
const inputRangoNegativo     = document.getElementById("rango-negativo");

    //boton restablecer filtros
const botonReseteoFiltros    = document.getElementById("boton-reseteo-filtros");

//señalizacion de botones e inputs del aside imagen
const botonEscapeTexto       = document.getElementById("boton-escape-texto");

    //input de texto del div de arriba del meme  
const contenidoTextoArriba   = document.getElementById("contenido-texto-arriba");
const botonDesaparecerArriba = document.getElementById("desaparecer-texto-arriba");

    //input de texto del div de abajo del meme 
const contenidoTextoAbajo    = document.getElementById("contenido-texto-abajo");
const botonDesaparecerAbajo  = document.getElementById("desaparecer-texto-abajo");

    //inputs y botones de edicion de tipografia
const tipoDeLetra            = document.getElementById("tipo-de-letra");
const tamañoLetra            = document.getElementById("tamaño-letra");
const botonMoverIzquierda    = document.getElementById("boton-izquierda");
const botonMoverCentro       = document.getElementById("boton-centro");
const botonMoverDerecha      = document.getElementById("boton-derecha");

    //color y fondo del texto del meme
const inputsColoryyfondo     = document.getElementById("inputs-colory-y-fondo");
const inputColorLetra        = document.getElementById("input-color-letra");
const inputColorFondoTexto   = document.getElementById("input-color-fondo");
const fondoTextoTransparente = document.getElementById("fondo-transparente");

    //opciones de contorno
const botonSacarContorno     = document.getElementById("sacar-contorno");
const botonContornoClaro     = document.getElementById("poner-contorno-claro");
const botonContornoOscuro    = document.getElementById("poner-contorno-oscuro");

    //input de espaciado
const inputEspaciado         = document.getElementById("input-espaciado");

    //opciones de espaciado
const tipoDeInterlineado     = document.getElementById("tipo-de-interlineado");

//barra de navegacion
const aparecerAsideImagen = () =>{
    asideImagen.classList.toggle("mostrar"); 
    asideTexto.classList.remove("mostrar");
    botonAsideImagen.classList.toggle("remarco-boton");
    botonAsideTexto.classList.remove("remarco-boton");
}

const aparecerAsideTexto = () =>{
    asideTexto.classList.toggle("mostrar"); 
    asideImagen.classList.remove("mostrar");
    botonAsideTexto.classList.toggle("remarco-boton");
    botonAsideImagen.classList.remove("remarco-boton");
}

const cambioDeModo = () =>{
    cambioBody.classList.toggle("modoClaro");
    barraNavegacion.classList.toggle("modo-claro-barra-navegacion");
    asideImagen.classList.toggle("modoClaro");
    asideTexto.classList.toggle("modoClaro");
    botonesDelNav.classList.toggle("modoClaroLi");
    botonEscapeTexto.classList.toggle("modoClaro");
    botonEquisImagen.classList.toggle("modoClaro");
    urlImagen.classList.toggle("modoClaroInput");
    contenidoTextoArriba.classList.toggle("modoClaroInput");
    contenidoTextoAbajo.classList.toggle("modoClaroInput");
    tamañoLetra.classList.toggle("modoClaroInput");
    inputColorParaBlend.classList.toggle("modoClaroInput");
    modoBlendFondoEImagen.classList.toggle("modoClaroInput");
    inputEspaciado.classList.toggle("modoClaroInput");
    tipoDeLetra.classList.toggle("modoClaroInput")
    tipoDeInterlineado.classList.toggle("modoClaroInput");
    botonMoverIzquierda.classList.toggle("modoClaroInput");
    botonMoverCentro.classList.toggle("modoClaroInput");
    botonMoverDerecha.classList.toggle("modoClaroInput");
    botonSacarContorno.classList.toggle("modoClaroInput");
    botonContornoClaro.classList.toggle("modoClaroInput");
    botonContornoOscuro.classList.toggle("modoClaroInput");
    divInputColor.classList.toggle("modoClaroInput");
    divInputColorLetra.classList.toggle("modoClaroInput");
    divInputColorFondo.classList.toggle("modoClaroInput");
    botonReseteoFiltros.classList.toggle("modoClaroInput");

    if(cambioBody.classList == "modoClaro"){
        botonModoClaro.innerHTML = '<i class="far fa-lightbulb"></i>Modo claro</button>';
    }else{
        botonModoClaro.innerHTML = '<i class="far fa-lightbulb"></i>Modo oscuro</button>';
    }   
}

//aside de texto
const salirAsideImagen = () =>{
    asideImagen.classList.remove("mostrar");
    botonAsideImagen.classList.remove("remarco-boton");
}

const insertaImagen = () =>{
    const valor = urlImagen.value;
    conteinerMeme.style.backgroundImage = "url(" + valor +")";//cambiar por fondo url
}

const elegirColorParaBlend = () =>{
    const valor = inputColorParaBlend.value;
    colorFondoMeme.style.backgroundColor = valor;
}

const elegirTipoDeBlend = () =>{
    let valor = modoBlendFondoEImagen.options[modoBlendFondoEImagen.selectedIndex];
    valor = valor.value;
    console.log(valor);
    conteinerMeme.style.mixBlendMode = valor;
}

const graduacionDeFiltroBrillo = () =>{
    const valor = inputRangoBrillo.value;
    conteinerMeme.style.filter = "brightness(" + valor + ")";
}

const graduacionDeFiltroOpacidad = () =>{
    const valor = inputRangoOpacidad.value;
    conteinerMeme.style.filter = "opacity(" + valor + ")";
}

const graduacionDeFiltroContraste = () =>{
    const valor = inputRangoContraste.value;
    conteinerMeme.style.filter = "contrast(" + valor + "%)";
}

const graduacionDeFiltroDesenfoque = () =>{
    const valor = inputRangoDesenfoque.value;
    conteinerMeme.style.filter = "blur(" + valor + "px)";
}

const graduacionDeFiltroGrises = () =>{
    const valor = inputRangoGrises.value;
    conteinerMeme.style.filter = "grayscale(" + valor + "%)";
}

const graduacionDeFiltroSepia = () =>{
    const valor = inputRangoSepia.value;
    conteinerMeme.style.filter = "sepia(" + valor + "%)";
}

const graduacionDeFiltroHue = () =>{
    const valor = inputRangoHue.value;
    conteinerMeme.style.filter = "hue-rotate(" + valor + "deg)";
}

const graduacionDeFiltroSaturado = () =>{
    const valor = inputRangoSaturado.value;
    conteinerMeme.style.filter = "saturate(" + valor + "%)";
}

const graduacionDeFiltroNegativo = () =>{
    const valor = inputRangoNegativo.value;
    conteinerMeme.style.filter = "invert(" + valor + ")";
}

const resetearFiltros = () =>{
    conteinerMeme.style.filter = "brightness(1)";
    conteinerMeme.style.filter = "opacity(1)";
    conteinerMeme.style.filter = "contrast(100%)";
    conteinerMeme.style.filter = "blur(0px)";
    conteinerMeme.style.filter = "grayscale(0%)";
    conteinerMeme.style.filter = "sepia(0%)";
    conteinerMeme.style.filter = "hue-rotation(0deg)";
    conteinerMeme.style.filter = "saturation(0%)";
    conteinerMeme.style.filter = "invert(0)";
    inputRangoBrillo.value     = 1;
    inputRangoOpacidad.value   = 1;
    inputRangoContraste.value  = 100;   
    inputRangoDesenfoque.value = 0;
    inputRangoGrises.value     = 0;
    inputRangoSepia.value      = 0;
    inputRangoHue.value        = 0;
    inputRangoSaturado.value   = 100;
    inputRangoNegativo.value   = 0;
}

//aside texto
const salirAsideTexto = () =>{
    asideTexto.classList.remove("mostrar");
    botonAsideTexto.classList.remove("remarco-boton");
}

const cambiarContenidoArriba = () =>{
    const valor = contenidoTextoArriba.value;
    textoArriba.textContent = valor;
}

const desaparecerBloqueTextoArriba = () =>{
    textoArriba.classList.toggle("desaparecer");
}

const cambiarContenidoAabajo = () =>{
    const valor = contenidoTextoAbajo.value;
    textoAbajo.textContent = valor;
}

const desaparecerBloqueTextoAbajo = () =>{
    textoAbajo.classList.toggle("desaparecer");
}

const cambiarLetra = () =>{
    let valor = tipoDeLetra.options[tipoDeLetra.selectedIndex];
    valor = valor.value;
    textoArriba.style.fontFamily = valor;
    textoAbajo.style.fontFamily  = valor;
}

const cambiarTamañoLetra = () =>{
    const valor = tamañoLetra.value;
    textoArriba.style.fontSize = valor +"px";
    textoAbajo.style.fontSize  = valor + "px";
}

const moverTextoIzquierda = () =>{
    textoArriba.style.textAlign = "start";
    textoAbajo.style.textAlign = "start";
}

const moverTextoCentro = () =>{
    textoArriba.style.textAlign = "center";
    textoAbajo.style.textAlign = "center";
}

const moverTextoDerecha = () =>{
    textoArriba.style.textAlign = "end";
    textoAbajo.style.textAlign= "end";
}

const cambiarColorLetra = () =>{
    const valor = inputColorLetra.value;
    textoArriba.style.color = valor;
    textoAbajo.style.color = valor;
}

const cambiarColorFondoTexto = () =>{
    const valor = inputColorFondoTexto.value;
    textoArriba.style.backgroundColor = valor;
    textoAbajo.style.backgroundColor = valor;
}

const hacerFondoDeTextoTransparente = () =>{
    const valor = inputColorFondoTexto.value;
    if(textoArriba.style.backgroundColor == "transparent"){
        textoArriba.style.backgroundColor = valor;
        textoAbajo.style.backgroundColor = valor;
    }else{
        textoArriba.style.backgroundColor = "transparent";
        textoAbajo.style.backgroundColor = "transparent"; 
    }
}

const sacarContornoDeLetras = () =>{
    textoArriba.style.textShadow = "1px 1px transparent";
    textoAbajo.style.textShadow = "1px 1px transparent";
}

const ponerContornoClaro = () =>{
    textoArriba.style.textShadow = "1px 1px #ffffff, 1px -1px #ffffff, -1px 1px #ffffff, -1px -1px #ffffff";
    textoAbajo.style.textShadow = "1px 1px #ffffff, 1px -1px #ffffff, -1px 1px #ffffff, -1px -1px #ffffff";
}

const ponerContornoOscuro = () =>{
    textoArriba.style.textShadow = "1px 1px #000000, 1px -1px #000000, -1px 1px #000000, -1px -1px #000000";
    textoAbajo.style.textShadow = "1px 1px #000000, 1px -1px #000000, -1px 1px #000000, -1px -1px #000000";
}

const cambiarTamañoEspaciado = () =>{
    const valor = inputEspaciado.value;
    textoArriba.style.padding = valor + "px 50px";
    textoAbajo.style.padding = valor + "px 50px"; 
}

const elegirTipoDeInterlineado = () =>{
    let valor = tipoDeInterlineado.options[tipoDeInterlineado.selectedIndex];
    valor = valor.value;
    textoArriba.style.lineHeight = valor;
    textoAbajo.style.lineHeight = valor; 
}

//botones del navbar
botonAsideImagen.onclick       = aparecerAsideImagen;
botonAsideTexto.onclick        = aparecerAsideTexto;
botonModoClaro.onclick         = cambioDeModo;

//aside de imagen
botonEquisImagen.onclick       = salirAsideImagen;
    //url
urlImagen.onblur               = insertaImagen;
    //fondo
inputColorParaBlend.oninput    = elegirColorParaBlend;
modoBlendFondoEImagen.oninput  = elegirTipoDeBlend;
    //filtros
inputRangoBrillo.oninput       = graduacionDeFiltroBrillo;
inputRangoOpacidad.oninput     = graduacionDeFiltroOpacidad;
inputRangoContraste.oninput    = graduacionDeFiltroContraste;
inputRangoDesenfoque.oninput   = graduacionDeFiltroDesenfoque;
inputRangoGrises.oninput       = graduacionDeFiltroGrises;
inputRangoSepia.oninput        = graduacionDeFiltroSepia;
inputRangoHue.oninput          = graduacionDeFiltroHue;
inputRangoSaturado.oninput     = graduacionDeFiltroSaturado;
inputRangoNegativo.oninput     = graduacionDeFiltroNegativo;
botonReseteoFiltros.onclick    = resetearFiltros;

//aside de texto
botonEscapeTexto.onclick       = salirAsideTexto;
    //texto superiorior
contenidoTextoArriba.oninput   = cambiarContenidoArriba;
botonDesaparecerArriba.onclick = desaparecerBloqueTextoArriba;
    //texto inferirior
contenidoTextoAbajo.oninput    = cambiarContenidoAabajo;
botonDesaparecerAbajo.oninput  = desaparecerBloqueTextoAbajo;
    //fuente
tipoDeLetra.oninput            = cambiarLetra;
tamañoLetra.onblur             = cambiarTamañoLetra;
        //moverel texto
botonMoverIzquierda.onclick    = moverTextoIzquierda;
botonMoverCentro.onclick       = moverTextoCentro;
botonMoverDerecha.onclick      = moverTextoDerecha;
    //color y fondo de texto del meme
inputColorLetra.oninput        = cambiarColorLetra;
inputColorFondoTexto.oninput   = cambiarColorFondoTexto;
fondoTextoTransparente.oninput = hacerFondoDeTextoTransparente;
    //contorno
botonSacarContorno.onclick     = sacarContornoDeLetras;
botonContornoClaro.onclick     = ponerContornoClaro;
botonContornoOscuro.onclick    = ponerContornoOscuro;
    //espaciado
inputEspaciado.oninput         = cambiarTamañoEspaciado;
    //tipo de interlineado
tipoDeInterlineado.oninput     = elegirTipoDeInterlineado;