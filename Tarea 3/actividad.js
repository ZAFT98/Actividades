// --- CREAMOS EL ARREGLO CON SUS RESPECTIVOS DATOS --- //
const Supermercado = 
[
    {
        producto:"panela", precio:3000, fecha_vence:"22/05/2024", valor_Iva:19, marca:"Blulel",
        datos_distribudor:{nombre:"Distribuidora los olivos", Contacto:"Jose Gomez", telefono:3142078743}
    },
    {
        producto:"arroz", precio:2800, fecha_vence:"12/04/2024", valor_Iva:19, marca:"Roa",
        datos_distribudor:{nombre:"Distribuidora la canasta", Contacto:"Jorge rios", telefono:3207421810}
    },
    {
        producto:"frijol", precio:3400, fecha_vence:"27/02/2024", valor_Iva:16, marca:"el trece",
        datos_distribudor:{nombre:"Distribuidora el paisita", Contacto:"Andres Hernandez", telefono:3023568864}
    },
    {
        producto:"garbanzo", precio:2500, fecha_vence:"25/02/2024", valor_Iva:16, marca:"el trece",
        datos_distribudor:{nombre:"Distribuidora el paisita", Contacto:"Andres Hernandez", telefono:3023568864}
    }
];


// --- EVERY: lo usare para verificar si hay productos con iva desactualizado --- //

const IvaActualizado = Supermercado.every((iv) => iv.valor_Iva>=19);

if(IvaActualizado==true)
{
    console.log("Todos los productos estan actualizados")
}else
{
    console.log("Hay productos con iva desactualizado, por favor revisar")
}
   


// --- MAP: lo usare para actualizar el iva de los productos --- //

const OrgIva = Supermercado.map((ivOrg) => ivOrg.valor_Iva=19);

const veriIva = Supermercado.every((iv) => iv.valor_Iva>=19);

if(veriIva==true)
{
    console.log("El iva se ha actualizado correctamente")
}



// --- FILTER: lo usare para buscar los productos por distribuidor --- //

const distribuidor = Supermercado.filter((dist) => dist.datos_distribudor.nombre == "Distribuidora el paisita");


console.log("Productos de Distribuidora el paisita", distribuidor);






