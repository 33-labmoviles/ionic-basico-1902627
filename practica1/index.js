
var total = 0
var monto = 0

var descTxt = document.getElementById("descripcion")
var montoTxt = document.getElementById("monto")
var totalMsg = document.getElementById("totalMsg")
var recibo = document.getElementById("recibo")

function CalcularTotal() {
  //Obtiene el valor del monto
  monto = montoTxt.value
  monto = parseInt(monto)
  
  //Lo suma al total
  total = total + monto

  //Agrega Row con las 2 columnas
  recibo.innerHTML = recibo.innerHTML + 
    "<ion-row><ion-col size='6'>" + descTxt.value + "</ion-col>" + 
    "<ion-col size='6'> $" + montoTxt.value + "</ion-col></ion-row>"

  //Cambia valor del total
  totalMsg.innerHTML = "Total: $" + total
}

