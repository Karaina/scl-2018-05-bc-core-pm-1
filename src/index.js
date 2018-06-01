function obtenerInformacion(){
let offset = parseInt(document.getElementById("ingresanumero").value);
let string = document.getElementById("escribirmensaje").value;
document.getElementById("mensajeCifrado").innerText= window.cipher.encode(string, offset);
}
function obtenerInformacion2(){
let offset = parseInt(document.getElementById("ingresanumero").value);
let string = document.getElementById("escribirmensaje").value;
document.getElementById("mensajedescifrado").innerText= window.cipher.decode(string, offset);
}
