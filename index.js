// CAÇA BUGS - ARRAYS

var numeros = []
var pares = []
var impares = []

for (var i = 0; i <= 10; i++) {
    var numero = parseInt(prompt("Informe o" + i + "º número:"))
    pares[i] = numero
}

// Separando os números pares e ímpares
var contadorImpar = 0
var contadorPar = 0

for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 != 0) {
        pares[contadorImpar] = pares[i]
        numeros++
    }
    else {
        impares[contadorPar] = impares[i]
        numeros++
    }
}

// Exibindo os três vetores no console
console.log("Números informados: " + numeros)
console.log("Números pares:" + pares)
console.log("Números impares:" + impares)



