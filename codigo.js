let num1 = 2;
let num2 = 0;






// --- uso de IF --- //
console.log("")
console.log("-------------------------------------------")
console.log("Uso de if")
if (num1 == 1)
{
    console.log("La opcion es: "+ num1+ ", respuesta: Hola");
}else
{
    console.log("No se encontraron")
}





// --- uso de || --- //
console.log("")
console.log("-------------------------------------------")
console.log("Uso de ||")
if (num1 == 2 || num1 == 3) 
{
    console.log("respuesta: Dos o Tres");
}else 
(
    console.log("No se encontraron")
)





// --- uso de && y de else --- //
console.log("")
console.log("-------------------------------------------")
console.log("Uso de &&")
if (num1 == 4 && num2 == 1) 
{
    console.log("respuesta: Hola, como estas");
} else
{
    console.log("respuesta: No estoy");
}





// --- uso de !, operadores de comparación ---//
console.log("")
console.log("-------------------------------------------")
console.log("Uso de !, operadores de comparación")
let EsDeNoche = true;
let hora = 19

if(hora > 18)
{
    console.log("Es de noche?: ",EsDeNoche);
}else
{
    console.log("Es de noche?: ",!EsDeNoche);
}





// --- uso de else if --- //
console.log("")
console.log("-------------------------------------------")
console.log("Uso de else if")
let dia = 2;

if (dia == 1)
{
 console.log("lunes");
} else 
if (dia == 2)
{
    console.log("martes");
}else 
if (dia == 2)
{
    console.log("miercoles");
}else 
if (dia == 2)
{
    console.log("jueves");
}else 
if (dia == 2)
{
    console.log("viernes");
}else 
if (dia == 2)
{
    console.log("sabado");
}else 
if (dia == 2)
{
    console.log("domingo");
}





// --- uso de switch --- //
console.log("")
console.log("-------------------------------------------")
console.log("uso de switch")

const cabesho = 'rojo';

switch (cabesho) {
  case 'calva':
    console.log('no tiene cabello');
    break;
    case 'negro':
    console.log('no me gusta el negro');
    break;
    case 'blanco':
    console.log('Se parece a mi abuela');
    break;
    case 'rojo':
    console.log('que lindo cabello');
    break;
    default:
    console.log('Color invalido');
  
}
