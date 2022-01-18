// Exercise #1
/* Part 1:
First, build a function called "businessHours". Similar to the day of the week class exercise, this function should accept two parameters: dayNumber and hourNumber.

By reading the dayNumber and the hourNumber, your program should print whether it is business hours or not. It should return true if it is business hours, and false if not.

function businessHours(dayNumber, hourNumber)

Obs: consider business hours 9am - 6pm. Use the 24-hour clock system (6pm = 18).
*/
var dayNumber = parseInt(prompt("Escribe el número del día de la semana en el que te encuentras (considera Domingo = 0 -> Sábado = 6):"));
var hourNumber = parseInt(prompt("Escribe qué hora es (considera sistema horario de 24hrs, e.g. 18hrs en vez de 6PM)"));
function businessHours(dayNumber, hourNumber){
    if ((dayNumber>0 && dayNumber<6) && (hourNumber>=9 && hourNumber<=18)){
        console.log(true);
    }else{
        console.log(false);
    }/*
    if (dayNumber>0 && dayNumber<6){
        console.log(true);
    }else if(hourNumber>=9 && hourNumber<=18){
        console.log(true);
    }
    else{
        console.log(false);
    }*/
}
businessHours(dayNumber,hourNumber);