window.cipher = {
  encode: (offset, string) => {
    let mensajeFinal = "";
    for (index=0;index < string.length;index++)
    {
      let codigoACSII = string.charCodeAt(index);
      let guardarACSII = (codigoACSII- 65 + offset )%26 + 65;
      let codigoLetra = String.fromCharCode(guardarACSII);
      mensajeFinal += codigoLetra;
       }

return mensajeFinal;
  },
  decode: (offset,string) => {
    /* Acá va tu código */
  }
}