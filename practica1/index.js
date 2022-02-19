
var total = 0
var monto = 0

var descTxt = document.getElementById("descripcion")
var montoTxt = document.getElementById("monto")
var totalMsg = document.getElementById("totalMsg")
var recibo = document.getElementById("recibo")

function AgregarEl() {
  //Obtiene el valor del monto
  monto = montoTxt.value
  monto = parseInt(monto)
  
  //Lo suma al total
  total = total + monto

//Lo agrega a la tabla
  
  nuevarow = document.createElement("ion-row") //Crea row
  nuevadesc = document.createElement("ion-col") //Crea columna de desc
  nuevoprec = document.createElement("ion-col") //Crea columna de precio

  nuevadesc.innerText = descTxt.value //Asigna valor a la descripcion
  nuevoprec.innerText = "$" + montoTxt.value //Asigna valor al precio

  nuevarow.appendChild(nuevadesc) //Agrega la columna de desc al row
  nuevarow.appendChild(nuevoprec) //Agrega la columna del precio al row

  recibo.appendChild(nuevarow)  //Agrega el row a la tabla

  //Cambia valor del total
  totalMsg.innerHTML = "Total: $" + total
}

