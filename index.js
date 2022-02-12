//paso 1 calcular el total

var total = 0; 
var monto = 0;
var montoTxt = document.getElementById("monto");
var totalMsg=  document.getElementById("totalMsg");


function calcularTotal(){
	//obtener el monto de campo de texto
	monto = montoTxt.value;
	monto = parseInt(monto); //resolviendo error de ionic --- revisar error 

	total = total + monto;
	console.log(total);



	//imprimir en pagina
	totalMsg.innerHTML = "Total: " + total;
}
