window.cipher = {
  encode: (offset, string) => { 
    let mensajeCifrado = "";
    for (index=0; index < string.length;index++)
    {
     const getIndexACSII = string.charCodeAt(index); 
      let formulaACSII = (getIndexACSII- 65 + offset )%26 + 65; 
      let cipherText = String.fromCharCode(formulaACSII);
      mensajeCifrado += cipherText;
       }

return mensajeCifrado;
  },

  decode: (offset,string) => {
    let mensajeCifrado ="";
    for (index=0; index < string.length;index++)
    {
      const getIndexACSII = string.charCodeAt(index); 
      let formulaACSII = (getIndexACSII- 65 - offset )%26 + 65; 
      let cipherText = String.fromCharCode(formulaACSII);
      mensajeCifrado += cipherText;
    }
  return mensajeCifrado;
  }
}