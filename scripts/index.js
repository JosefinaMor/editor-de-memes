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
const tipoDeLetra            = document.getElementById("tipo-de-letra");
const tamañoLetra            = document.getElementById("tamaño-letra");
const botonMoverIzquierda    = document.getElementById("boton-izquierda");
const botonMoverCentro       = document.getElementById("boton-centro");
const botonMoverDerecha      = document.getElementById("boton-derecha");
const inputColorLetra        = document.getElementById("input-color-letra");
const inputColorFondoTexto   = document.getElementById("input-color-fondo");
const fondoTextoTransparente = document.getElementById("fondo-transparente");
const botonSacarContorno     = document.getElementById("sacar-contorno");
const botonContornoClaro     = document.getElementById("poner-contorno-claro");
const botonContornoOscuro    = document.getElementById("poner-contorno-oscuro");
const inputColorParaBlend    = document.getElementById("input-color-para-blend");
const modoBlendFondoEImagen  = document.getElementById("modo-blend-fondo-e-imagen");
const colorFondoMeme         = document.getElementById("fondo-meme");
const inputRangoBrillo       = document.getElementById("rango-brillo");
const inputRangoOpacidad     = document.getElementById("rango-opacidad");
const inputRangoContraste    = document.getElementById("rango-contraste");
const inputRangoDesenfoque   = document.getElementById("rango-desenfoque");
const inputRangoGrises       = document.getElementById("rango-grises");
const inputRangoSepia        = document.getElementById("rango-sepia");
const inputRangoHue          = document.getElementById("rango-hue");
const inputRangoSaturado     = document.getElementById("rango-saturado");
const inputRangoNegativo     = document.getElementById("rango-negativo");
const botonReseteoFiltros    = document.getElementById("boton-reseteo-filtros");
const inputEspaciado         = document.getElementById("input-espaciado");
const tipoDeInterlineado     = document.getElementById("tipo-de-interlineado");

const cambioDeModo = () =>{
    cambioBody.classList.toggle("modoClaro");
    barraNavegacion.classList.toggle("modo-claro-barra-navegacion");
    asideImagen.classList.toggle("modoClaro");
    asideTexto.classList.toggle("modoClaro");
    botonesDelNav.classList.toggle("modoClaroLi");
    if(cambioBody.classList == "modoClaro"){
        botonModoClaro.innerHTML = '<i class="far fa-lightbulb"></i>Modo claro</button>';
    }else{
        botonModoClaro.innerHTML = '<i class="far fa-lightbulb"></i>Modo oscuro</button>';
    }   
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
    textoAbajo.style.fontFamily  = valor;
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

const elegirColorParaBlend = () =>{
    const valor = inputColorParaBlend.value;
    colorFondoMeme.style.backgroundColor = valor;
}

const elegirTipoDeBlend = () =>{
    let valor = modoBlendFondoEImagen.options[modoBlendFondoEImagen.selectedIndex];
    valor = valor.value;
    conteinerMeme.style.blend = valor;
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
    conteinerMeme.style.filter = "hue-rotation(" + valor + "deg)";
}

const graduacionDeFiltroSaturado = () =>{
    const valor = inputRangoSaturado.value;
    conteinerMeme.style.filter = "saturation(" + valor + "%)";
}

const graduacionDeFiltroNegativo = () =>{
    const valor = inputRangoNegativo.value;
    conteinerMeme.style.filter = "invert(" + valor + ")";
}

const resetearFiltros = () =>{
    conteinerMeme.style.filter = "brightness(1), opacity(1), contrast(100%), blur(0px), grayscale(0%), sepia(0%), hue-rotation(0deg), saturation(0%), invert(0)";
    inputRangoBrillo.value     = 1;
    inputRangoOpacidad.value   = 1;
    inputRangoContraste.value  = 100;   
    inputRangoDesenfoque.value = 0;
    inputRangoGrises.value     = 1;
    inputRangoSepia.value      = 0;
    inputRangoHue.value        = 0;
    inputRangoSaturado.value   = 100;
    inputRangoNegativo.value   = 0;
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
inputColorLetra.oninput        = cambiarColorLetra;
inputColorFondoTexto.oninput   = cambiarColorFondoTexto;
fondoTextoTransparente.oninput = hacerFondoDeTextoTransparente;
botonSacarContorno.onclick     = sacarContornoDeLetras;
botonContornoClaro.onclick     = ponerContornoClaro;
botonContornoOscuro.onclick    = ponerContornoOscuro;
inputColorParaBlend.oninput    = elegirColorParaBlend;
modoBlendFondoEImagen.oninput  = elegirTipoDeBlend;
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
inputEspaciado.oninput         = cambiarTamañoEspaciado;
tipoDeInterlineado.oninput     = elegirTipoDeInterlineado;