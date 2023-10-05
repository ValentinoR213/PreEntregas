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

alert("Hola!! Bienvenido a mi simulador de premios")

let Numero
 
while (Numero != "Esc") {
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
    alert("Gracias por probar el simulador")
    break;
}
}











