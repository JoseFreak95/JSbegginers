function executeFunc(){
    var full_name = prompt("Introduce nombre y apellidos:");
    var arrName = full_name.split(" ");
    var namelength = 0;
    var resultado;

    arrName.forEach(element => namelength += element.length); 

    resultado = "1. La longitud del nombre sin espacios es: " + namelength + "</br>2. El nombre es mayusculas y minusculas es: " + full_name.toUpperCase() + " " + full_name.toLowerCase() + "</br>3. Nombre: " + arrName[0] + "</br> Apellido 1: " + arrName[1] + " </br> Apellido 2: " + arrName[2] + "</br>Un posible nombre puede ser: " + arrName[0].charAt(0) + arrName[1] + arrName[2].charAt(0) + "</br>Otro podible nombre: " + arrName[0].substr(0,3) + arrName[1].substr(0,3) + arrName[2].substr(0,3);  
    document.getElementById('solution').innerHTML = resultado;
}
