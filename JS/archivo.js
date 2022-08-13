let entrada = prompt("Ingrese su nombre")

while(entrada != "ESC"){
    switch(entrada){
        case"lucas":
            alert("Hola Lucas");
            break;
        case"diego":
            alert("Hola Diego");
            break;
        default:
            alert("¿QUIEN SO'?")
            break;
    }
    entrada= prompt("ingrese su nombre")
}
