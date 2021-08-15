const botonDescargaImagenMeme = document.getElementById("boton-descarga-meme");

const bajarImagenMeme = () =>{
    domtoimage.toBlob(document.getElementById("fondo-meme"))
    .then(function (blob) {
        window.saveAs(blob, 'my-node.png');
    });

}

botonDescargaImagenMeme.onclick = bajarImagenMeme;
