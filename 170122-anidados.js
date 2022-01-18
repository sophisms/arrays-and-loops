// Ciclos anidados

let count = 0;
while(count++ < 50){
    console.log("Ciclo externo #" + count);
    for(let i=0; i<25; i++){
        console.log(i);
    }
}