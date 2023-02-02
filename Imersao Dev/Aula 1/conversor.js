var valorEmDolar = 2;
var cotacaoDoDolar = 5.32;
var cotacaoEthereum = 7998.37;

var valorKm = 1;
var distanciaAnoLuz = 1.057*(10^-13);


var valorEmReal = valorEmDolar * cotacaoEthereum;
valorEmReal = valorEmReal.toFixed(2);

var conversaoKmAno = valorKm * distanciaAnoLuz;
conversaoKmAno = conversaoKmAno.toFixed(8);

alert("Valor em reais: R$" + valorEmReal);
alert("A distancia de " + valorKm + " e de " + conversaoKmAno + " Em anos Luz.");



/*Desafio 1 - Trocar o valor da Moeda
Desafio 2 - receber o nome de quem esta utilizando
Desafio 3 - converter o valor em distancia em anos luz

*/