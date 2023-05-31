//Permitir que el usuario continue con el programa

function continuarPrograma() {
    console.log("Quieres continuar? Pon 'si'");
    const input = prompt();
  
    if (input.toLowerCase() === "si") {
      continuarPrograma();
    }
  }