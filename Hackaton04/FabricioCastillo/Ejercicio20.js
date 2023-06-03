function calcularDiasTranscurridos(fecha1, fecha2) {
    let unDia = 24 * 60 * 60 * 1000; 
    let fechaInicio = new Date(fecha1);
    let fechaFin = new Date(fecha2);
    let diferencia = Math.abs(fechaFin - fechaInicio);
    let diasTranscurridos = Math.floor(diferencia / unDia);
    return diasTranscurridos;
  }
  let fechaInicio = '2023-01-01';
  let fechaFin = '2023-06-03';
  let diasTranscurridos = calcularDiasTranscurridos(fechaInicio, fechaFin);
  console.log(diasTranscurridos); 
  