  const btnCotizar = document.getElementById("btnCotizar");
  btnCotizar.addEventListener('click', function () {
    if (document.getElementById("terminos").checked) {
      let servicio = document.getElementById("servicio").value;
      let cantidad = document.getElementById("cantidad").value || 0;

      let subtotal = parseFloat(cantidad) * parseFloat(servicio);

      let informe1 = document.getElementById("informe1");
      if (informe1.checked) {
        subtotal += parseFloat(informe1.value);
      }


      let informe2 = document.getElementById("informe2");
      if (informe2.checked) {
        subtotal += parseFloat(informe2.value);
      }
      let informe3 = document.getElementById("informe3").value;
      if (informe3.checked) {
        subtotal += parseFloat(informe3.value);
      }
      alert(`El costo total promedio de su cotizaion es de ${subtotal} por cantidad de ${cantidad} m2`)
    } else {
      alert("Debe aceptar los términos y condiciones");
    }
  });


