// Normal
var edad = 18;
var permiso = "si";
/*
var edad = 18;
if (edad >= 18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}
*/
/*
// Operador condicional ternario

edad >= 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad");

// Condicional ternario anidado (no se recomienda)

edad >=18 ? permiso == "si"? console.log("Viva, disfruta de la fiesta!"): console.log("Lástima, suerte para la próxima")  : permiso == "si" ? console.log("Hola McLovin"): console.log("Hoy te vas a dormir calientito");
*/

//Haciendo uso del operador ternario, obtener 6 posibles resultados a partir de respuestas variadas.
/*
var age = 17;
var single = false;
var party = true;

age >= 18 ? single == true ? party == false ? console.log("Te falta barrio") : console.log("El barrio te respalda") : console.log("Feliz 14 de febrero") : single == true ? console.log("Estás pequeño") : party == true ? console.log("Proyecto X") : console.log("Disfruta el 14 de febrero") ;

// cómo se están anidando?

// Console.log general

var age = 17;
var single = false;
var party = true;

console.log(age >= 18 ? single == true ? party == false ? "Te falta barrio" : "El barrio te respalda" : "Feliz 14 de febrero" : single == true ? "Estás pequeño" : party == true ? "Proyecto X" : "Disfruta el 14 de febrero") ;
*/

// Ejemplo Guille 
var cond1 = 17;
var cond2 = "Ale "

console.log(cond1 >= 18 ? cond2.toLowerCase().trim()=="sofi"? "Si es sofi": "No es sofi" : cond2=="sofi"? "Es su tocaya": "No se quien es");

// toLowerCase para evitar discriminación por mayúscula
