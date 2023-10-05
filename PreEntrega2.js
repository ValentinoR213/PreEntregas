let Premio1 = "Auriculares Logitech "
let Premio2 = "Plasma Tv de 32 pulgadas "
let Premio3 = "Iphone 15 Pro Max "
let Premio4 = "Lenovo Legion 5i Pro Gen 6 "
let Premio5 = "Placa de Video Nvidia "
let Premio6 = "RTX 3090 "
let Premio7 = "PC Gamer Armada "
let Premio8 = "PS 5 "
let Premio9 = "Xbox Serie X "
let Premio10 = "Xiaomi Redmi Note 12 Pro "
let Premio11 = "Mouse Noga Ultimo Modelo "
let Premio12 = "Teclado Noga Ultimo Modelo "
let Premio13 = "Pendrive de 1T de memoria "
let Premio14 = "Mouse Inalambrico Logitech "
let Premio15 = "FELICIDADES!! Obtuviste una Apple MacBook Pro "
let Premio16 = "Apple AirPods "
let Premio17 = "FELICIDADES!! Obtuviste un iPad "
let Premio18 = "Apple EarPods "


alert("Hola!! Bienvenido a mi simulador de premios")
SiYNo = "No"
let Numero
 
while (SiYNo == "No") {
    let Numero = prompt("Ingrese un numero del 1 al 10")
if (Numero > 0 && Numero < 11) {
    alert("Se esta decidiendo su premio");
}else{
    alert("Ingrese un valor valido");
}
switch (Numero) {
    case "1":
        alert("Te has ganado " + Premio1);
        break;
    case "2":
        alert("Te has ganado " + Premio2);
        break;
    case "3":
        alert("Te has ganado " + Premio3);
        break;
    case "4":
        alert("Te has ganado " + Premio4);
        break;
    case "5":
        alert("Te has ganado " + Premio5);
        break;
    case "6":
        alert("Te has ganado " + Premio6);
        break;
    case "7":
        alert("Te has ganado " + Premio7);
        break;
    case "8":
        alert("Te has ganado " + Premio8);
        break;
    case "9":
        alert("Te has ganado " + Premio9);
        break;
    case "10":
        alert("Te has ganado " + Premio10);
        break;
    default:
        alert("A ocurrido un error");
        break;  
    }
let Decicion = prompt("Desea continuar? ingrese si o no")
if (Decicion == "si") {
    alert("Continuemos!!")
}else{
    alert("Gracias por probar el simulador!!")
    break;
}
let Numeros = [1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000, 3250, 3500, 3750, 4000, 4250, 4500, 4750, 5000, 5250, 5500, 5750, 6000, 6250, 6500, 6750, 7000, 7250, 7500, 7750, 8000, 8250, 8500, 8750, 9000, 9250, 9500, 9750, 10000]
let NumeroAleatorio = Math.floor(Math.random() * Numeros.length)
let NumeroEscojido = Numeros[NumeroAleatorio]                 

alert("Felicidades!! por ser el cliente numero " + NumeroEscojido + " te has ganado una oportunidad de ganar otro premio")

let Premio = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let PremioAleatorio = Math.floor(Math.random() * Premio.length)

let PremioEscojido = Premio[PremioAleatorio]

let PremioExtra = prompt("Quieres el premio?")

if (PremioExtra == "si") {
    alert("Tu suerte esta decidiendo que...")
}else{
    alert("Ah no lo queres? bueno...")
    alert("¡¡CHAU!!")
    break;
}

switch (PremioEscojido) {
    case 1:
        
            alert("Te has ganado " + Premio11);
            
        break;
    case 2:
        
            alert("Te has ganado " + Premio12);
            
        break;
    case 3:
        
            alert("Te has ganado " + Premio13);
            
        break;
    case 4:
        
            alert("No has ganado nada, suerte la proxima");
            
        break;
    case 5:
        
            alert("Te has ganado " + Premio14);
            
        break;
    case 6:
        
            alert("Te has ganado " + Premio15);
            
        break;
    case 7:
        
            alert("Te has ganado " + Premio16);
            
        break;
    case 8:
        
            alert("No has ganado nada, suerte la proxima");
            
        break;
    case 9:
        
            alert("Te has ganado " + Premio17);
            
        break;
    case 10:
        
            alert("Te has ganado " + Premio18);
            
        break;
    default:
        alert("A ocurrido un error");
        break;
}

let DecicionFinal = prompt("Te gusto el simulador? ingrese si o no")

if (DecicionFinal == "si") {
    alert("Muchas gracias, me alegro que te haya gustado, por ahora aqui termina el simulador")
    alert("Espera por mas actualizaciones!!")
}else{
    alert("Ah no te gusto? pues te hecho. ADIOS!")
    break;
}

let DecicionRepetir =  prompt("Desea continuar? ingrese si o no")

if (DecicionRepetir == "si") {
    alert("Continuemos!!")
}else{
    alert("Gracias por probar el simulador!!")
    SiYNo = "Si"
}
}











