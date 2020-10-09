function executeFunc(){
    option = Number(document.getElementById("seleccion").value);
    
    switch (option) {
        case 1:
            var base = Number(prompt("Introduce un numero como base:"));
            var exponente = Number(prompt("Introduce un numero como exponente:"));
            resultado = "La potencia de " + base + " elevado a " + exponente + " es: " + Math.pow(base, exponente);
            document.getElementById('solution').innerHTML = resultado;
            break;
        case 2:
            var number = Number(prompt("Introduce un numero (no negativo):"));

            if (Math.sign(number) < 0){
                alert("He dicho no negativo!!")
            } else {
                resultado = "La raiz de " + number + " es: " + Math.sqrt(number);
                document.getElementById('solution').innerHTML = resultado;
            }
            break;
        case 3:
            var number = Number(prompt("Introduce un numero decimal:"));

            if (Number.isNaN(number)){
                alert("El formato del del decimal debe ser X.X")
            } else {
                resultado = "El redondeo a la baja del numero es: " + Math.floor(number) + "<br/>El redondeo a la alta del numero es: " + Math.ceil(number);
                document.getElementById('solution').innerHTML = resultado;
            }
            break;
        case 4:
            var number = Number(prompt("Introduce un angulo (0-360):"));
            resultado = "El seno del angulo es: " + Math.sin(number) + "<br/>El coseno del angulo es: " + Math.cos(number)+ "<br/>La tangente del angulo es: " + Math.tan(number);
            document.getElementById('solution').innerHTML = resultado;
            break;
        default:
            alert("Introduce una de las opciones del menu");
            break;
    }
}
