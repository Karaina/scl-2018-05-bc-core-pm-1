function obtenerInformacion (){
let offset = parseInt(document.getElementById("obtenernumero").value);
let string = document.getElementById("escribirmensaje").value;
document.getElementById("mensajeCifrado").innerText= window.cipher.encode(offset,string);
}
function obtenerInformacion2 (){
    let offset = parseInt(document.getElementById("obtenernumero").value);
    let string = document.getElementById("escribirmensaje").value;
    document.getElementById("mensajedescifrado").innerText= window.cipher.decode(offset,string);
}
