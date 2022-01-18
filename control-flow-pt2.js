/* Part 2:
Now, create the function getDayNumber.

It should accept two parameters: janFirstDayNumber and yearDayNumber.

The yearDayNumber will be an int ranging from 0 to 365.

janFirstDayNumber will be an int ranging from 0 to 6, representing the day of the week of January 1st.

Your function should then calculate and return the day of the week corresponding to the yearDayNumber passed.

Hint: use the remainder operator (%), dividing your yearDayNumber by 7.*/
var janFirstDayNumber = parseInt(prompt("Escribe el día que corresponde al primero de Enero (considera que Domingo = 0 -> Sábado = 6)"));
var yearDayNumber = parseInt(prompt("Escribe un número dentro del intervalo 0-365"));
const week = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

function getDayNumber(janFirstDayNumber, yearDayNumber){
    console.log("El primero de Enero cayó en " + week[janFirstDayNumber]);
    console.log("El número del día del año ingresado fue " + yearDayNumber);
    
    for (let i = 0; i <= yearDayNumber; i++){
        if((janFirstDayNumber>=0) && (janFirstDayNumber<=6)){
            //console.log(i + " " + janFirstDayNumber);
            janFirstDayNumber++;
        }else{
            janFirstDayNumber = 0;
            i--;
        }
    }
    let day = janFirstDayNumber-1;
    console.log("El número del día del año corresponde al día " + week[day]);
    /*for (janFirstDayNumber in ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]){
        if (janFirstDayNumber == week.indexOf("Domingo")){
            console.log('hola');
        }
    }
    let counter = 0;
    for (year[0]; year[yearDayNumber]; counter++){
        console.log(counter);
    }*/
}
getDayNumber(janFirstDayNumber, yearDayNumber);