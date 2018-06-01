window.cipher = {
  encode: (string, offset) => { 
    let mensajeCifrado = "";
    for (index=0; index < string.length;index++)
    {
    string = string.toUpperCase();
         const getIndexACSII = string.charCodeAt(index); 
         let formulaACSII = (getIndexACSII- 65 + offset )%26 + 65; 
         let cipherText = String.fromCharCode(formulaACSII);
            mensajeCifrado += cipherText;
       }
return mensajeCifrado;
  },

  decode: (string, offset) => {
    let mensajeCifrado ="";
    for (index=0; index < string.length;index++)
    {
      const getIndexACSII = string.charCodeAt(index); 
      let formulaACSII = (getIndexACSII+ 65 - offset )%26 + 65;
      let cipherText = String.fromCharCode(formulaACSII);
      mensajeCifrado += cipherText;
    }
  return mensajeCifrado;
  }
}