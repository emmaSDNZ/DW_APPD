/*

**Nivel Basico

E_1: Saludo
Descripción: Crea una función llamada saludar que tome un parámetro nombre y devuelva un saludo personalizado.
Instrucciones:

Usa let para declarar la variable mensaje.
Llama a la función con tu nombre y muestra el resultado en la consola.

E_2:    Conversión de Celsius a Fahrenheit
Descripción: Crea una función llamada celsiusAFahrenheit que convierta grados Celsius a Fahrenheit.
Instrucciones:

Invertiga sobre la fórmula 
Devuelve el resultado.


**Nive Intermedio

E_3:   Suma de Números
 Descripción: Crea una función llamada sumar que tome dos parámetros, num1 y num2, y devuelva la suma de ambos.
Instrucciones:

Asegúrate de que ambos parámetros sean de tipo Number.
Si alguno no es un número, devuelve un mensaje de error.

E_4:   Calculadora de Producto

Descripción: Crea una función llamada multiplicar que reciba dos números y devuelva su producto.
Instrucciones:

Usa el operador * para calcular el producto.
Incluye un caso que devuelva un mensaje si alguno de los parámetros no es un número.


**Nivel Avanzado
 
E_5: Factorial
Descripción: Crea una función recursiva llamada factorial que calcule el factorial de un número entero positivo.
Instrucciones:

Verifica que el número sea mayor o igual a cero.
Si el número es cero, devuelve 1.

Resolucion: 
function factorial(n) {
    if (n < 0) return "Error: el número debe ser positivo.";
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Salida: 120


E_6:   Sumar Números en una Cadena

Descripción: Crea una función llamada sumarNumerosEnCadena que tome una cadena de texto y devuelva la suma de los números que contiene.
Instrucciones:
Itera sobre la cadena y suma los números.
Devuelve 0 si no hay números.

RESOLUCION: 
function sumarNumerosEnCadena(cadena) {
    let suma = 0;
    let numeroTemporal = "";

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] >= '0' && cadena[i] <= '9') {
            numeroTemporal += cadena[i];
        } else {
            if (numeroTemporal) {
                suma += parseInt(numeroTemporal);
                numeroTemporal = "";
            }
        }
    }
    if (numeroTemporal) {
        suma += parseInt(numeroTemporal);
    }
    return suma;
}
console.log(sumarNumerosEnCadena("12 manzanas y 15 peras")); // Salida: 27
console.log(sumarNumerosEnCadena("no hay números")); // Salida: 0


E_7 :   Palíndromo

Descripción: Crea una función llamada esPalindromo que verifique si una cadena es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda).
Instrucciones:
Elimina espacios manualmente y compara los caracteres.

Resolucion:
 function esPalindromo(cadena) {
    let cadenaLimpiada = "";
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] !== " ") {
            cadenaLimpiada += cadena[i];
        }
    }
    let esPalindromo = true;
    for (let i = 0; i < cadenaLimpiada.length / 2; i++) {
        if (cadenaLimpiada[i] !== cadenaLimpiada[cadenaLimpiada.length - 1 - i]) {
            esPalindromo = false;
            break;
        }
    }
    return esPalindromo;
}
console.log(esPalindromo("Anita lava la tina")); // Salida: true
console.log(esPalindromo("Hola")); // Salida: false


E_8: : Invertir una Cadena

Descripción: Crea una función llamada invertirCadena que tome una cadena y devuelva la cadena invertida.
Instrucciones:
Usa un bucle para construir la cadena invertida.

function invertirCadena(cadena) {
    let cadenaInvertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;
}
console.log(invertirCadena("Hola")); // Salida: aloH

E_9:    Cuenta Vocales

Descripción: Crea una función llamada contarVocales que cuente el número de vocales en una cadena dada.
Instrucciones:
Itera sobre la cadena y cuenta las vocales manualmente.

*/