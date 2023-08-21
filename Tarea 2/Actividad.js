
// --- 1.      HIPOTENUSA --- //
console.log("Punto 1")
console.log("")
let catetO= prompt("Ingrese el cateto opuesto")
let catetA= prompt("Ingrese el cateto adyacente")

const calculoHipotenusa =(CatO, CatA) => Math.pow(CatO,2) + Math.pow(CatA,2);

console.log("La hipotenusa es: "+ calculoHipotenusa(catetO,catetA))
console.log("")
console.log("")



     
// --- 2.      ARREGLO --- //
console.log("Punto 2")
console.log("")
let arreglo = [2,4,5,67,1,2]

// --- IMPRESION ARREGLO SIN DATO NUEVO --- //
for (let i=0; i<arreglo.length; i++)
{
    console.log("a: "+arreglo[i])
}


// --- PEDIMOS EL DATO A INGRESAR --- //
let dato= prompt("Ingrese el dato nuevo")


// --- FUNCIÓN QUE METE EL DATO EN EL VECTOR --- //
const ponerDato = (datPon) =>   arreglo.push(datPon);

// --- ENVIAMOS EL DATO A LA FUNCIÓN --- //
ponerDato(dato)

// --- IMPRIMIMOS EL VECTOR CON EL DATO NUEVO --- //
console.log("")
console.log("Vector con nuevo dato")

for (let i=0; i<arreglo.length; i++)
{
    console.log("a: "+arreglo[i])
}
console.log("")
console.log("")



// --- 3.      CALLBACK FUNCTION --- //
console.log("Punto 3")
console.log("")

const HYE = (a1, a2, operacion) =>
{
    return operacion(a1,a2);
    
}

console.log("La hipotenusa es: ", HYE(4,4, calculoHipotenusa))
console.log("El dato nuevo es: ", HYE(8,4, ponerDato))


// --- IMPRIMIMOS EL VECTOR CON EL DATO NUEVO --- //
console.log("")
console.log("Vector con nuevo dato")

for (let i=0; i<arreglo.length; i++)
{
    console.log("a: "+arreglo[i])
}