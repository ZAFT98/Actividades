class computador
{

    constructor (componentes)
    {
        this.GraficaDedicada = componentes.GraficaDedicada
        this.procesador = componentes.procesador
        this.ram = {slot1:"", slot2:""}
        this.almacenamiento = componentes.almacenamiento
        this.placa = componentes.placa
        this.carcasa = componentes.carcasa
    }

    mostrarDispBoot()
    {
        console.log("El sistema operativo esta siendo ejecutado en el disco "+ this.almacenamiento)
    }

    apagar()
    {
        console.log("Apagando el sistema")
    }

    bios()
    {
        console.log("Componentes: "+"\n"+ "Grafica: "+this.GraficaDedicada+"\n"+"Procesador: "+this.procesador+"\n"+"Ram: "+this.ram.slot1+"\n"+"Almacenamiento: "+this.almacenamiento+"\n"+"Placa: "+this.placa+"\n"+"Carcasa: "+this.carcasa+"\n")
    }

    
} 

class pcHogar extends computador 
{
    constructor(GraficaDedicada,procesador, ram, almacenamiento, placa, carcasa)
    {
        super(GraficaDedicada, procesador,ram,almacenamiento,placa,carcasa)
    }

    reiniciarGrafica()
    {
        console.log("Reiniciando la grafica "+ this.GraficaDedicada)
    }

    LimpiarCache()
    {
        console.log("Limpiando cache en el disco " + this.almacenamiento)
    }
}

const pcDelCalvo = new pcHogar 
(
    {
        GraficaDedicada: "RTX 3080",
        procesador:"Intel celeron",
        ram:{slot1: "2 gb", slot2:"1024 mb"},
        almacenamiento:"20 gb hdd",
        placa:"gigabyte oc liquid refrigeration ready",
        carcasa:"Hecha con material reciclable (Cartoncito con huecos finamente estructurados)"        
    }
)

const pcDelChamo = new pcHogar 
(
    {
        GraficaDedicada: "RTX Aourus Strix 4090 24 OC",
        procesador:"Ryzen thread ripper",
        ram:{slot1: "64gb", slot2:"64gb"},
        almacenamiento:"m.2 5 teras Sony",
        placa:"gigabyte oc liquid refrigeration ready",
        carcasa:"Thermaltake Carbon fiber exclusive messi deal, water cooled"        
    }
)

console.log("El pc del Calvo")
console.log(pcDelCalvo.bios())

console.log(pcDelCalvo.reiniciarGrafica())

console.log(pcDelCalvo.LimpiarCache())

console.log("\n"+"El pc del Chamo")
console.log(pcDelChamo.bios())

console.log(pcDelChamo.reiniciarGrafica())

console.log(pcDelChamo.mostrarDispBoot())

