function isValidCard(cardNumber){
	//cada digito del string es colocado en un array con split y espacio ''
	var arrayNumbers = cardNumber.split('');
	//el arrayNumbers es invertido
	var arrayInverse = arrayNumbers.reverse();
	//creo un acumulador suma, donde se almacenara las sumas de los digitos de la tarjeta
	var sum = 0;
    	//creo un bucle for, que recorre todo los indices del arrayInverse
    	for(var i = 0; i < arrayInverse.length; i++){
      	  //el array de los numeros tipo string lo convierto en tipo numbers y lo almaceno en el mismo array
        	arrayInverse[i] = parseInt(arrayInverse[i]);
          	  //condiciono un mod == 1, para que solo tomen los indices impares
            	if(i % 2 == 1){
									/*segun la validacón de tarjeta los indices impares (en mi caso porque tomo como inicializacion 
										i = 0) debo multiplicarlo por dos, si el resultado de esa multiplicación me da un número de dos 
										digitos, entonces debo sumar dichos digitos. Para obtener el PRIMER DIGITO, al número debo 
										dividirlo entre 10 y mostrarlo con un parseInt, para obtener solo solo la parte entera del 
										resultado, ahora para el SEGUNDO DIGITO, al numero debo sacar su MOD 10, el segundo digito. 
										Despues sumo dicho valores y lo alamaceno en el arrayInverse */
              	  arrayInverse[i] = (parseInt((arrayInverse[i] * 2 )/ 10 )) + ((arrayInverse[i] * 2 ) % 10 );
          	  }
        	//ahora sumare los elementos del array tipo numbers, lo almacena en una variable sum.
        	sum += arrayInverse[i];
    	}
		
		//para validarel numero de tarjetas la suma de digitos mod 10 debe resulta cero, si es asi, me muestre true, de lo contrario un false
    return sum % 10 == 0 ? document.write (true+', su número de tarjeta es correcta') : document.write ('Número de tarjeta NO válida');
}

//el ingreso de dato dentro de un prompt siempre es de tipo string
var cardNumber = prompt ("Ingrese su número de tarjeta: ");

//condiciono que el ingreso es de 16 digitos, además no sea un ingreso de 16 veces cero.
if(cardNumber.length == 16 & cardNumber != 0000000000000000 ){
	//aqui llamo a la funcion isValidCard con el argumento cardNumber
	isValidCard (cardNumber);

}else  
    document.write('Número de tarjeta NO válida')