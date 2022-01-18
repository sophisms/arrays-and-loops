/*Part 3

Finally, build a function that, from a yearDayNumber (int, 0-365) and an hourNumber (int, 0-23), returns true if it is business hours.*/
var janFirstDayNumber = parseInt(prompt("Escribe el día que corresponde al primero de Enero (considera que Domingo = 0 -> Sábado = 6)"));
var yearDayNumber = parseInt(prompt("Escribe un número dentro del intervalo 0-365"));
var hourNumber = parseInt(prompt("Escribe Escribe qué hora es (considera sistema horario de 24hrs, e.g. 18hrs en vez de 6PM)"));
const week = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

function businessHours(janFirstDayNumber, yearDayNumber, hourNumber){
    console.log("El primero de Enero cayó en " + week[janFirstDayNumber]);
    console.log("El número del día del año ingresado fue " + yearDayNumber);
    console.log("La hora ingresada fue " + hourNumber);
    
    // Calcula día correspondiente al número del intervalo 0-365
    for (let i = 0; i <= yearDayNumber; i++){
        if((janFirstDayNumber>=0) && (janFirstDayNumber<=6)){
            //console.log(i + " " + janFirstDayNumber);
            janFirstDayNumber++;
        }else{
            janFirstDayNumber = 0;
            i--;
        }
    }

    // Mostrar día del año correspondiente
    let dayNumber = janFirstDayNumber-1;
    console.log("El número del día del año corresponde al día " + week[dayNumber]);

    if ((dayNumber>0 && dayNumber<6) && (hourNumber>=9 && hourNumber<=18)){
        console.log(true);
    }else{
        console.log(false);
    }
}
businessHours(janFirstDayNumber, yearDayNumber, hourNumber);