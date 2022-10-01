var num = prompt('Cantidad de numeros: ');
var sumando = 0;
var total = 0;
for (i = 0; sumando >= 0; i++) {
	sumando = prompt('Numeros: ');
	total = parseInt(total) + parseInt(sumando);
}

alert('Suma total: ' + parseInt(total));
