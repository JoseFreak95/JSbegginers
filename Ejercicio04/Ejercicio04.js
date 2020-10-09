
window.onload = function(){
    var button = document.getElementById('calculate');

    button.onclick = function(){
        var num1 = document.getElementById("numero1").value;
        var num2 = document.getElementById("numero2").value;

        num1 = Number(num1);
        num2 = Number(num2);
        
        if (num1 > num2){
            var resultado = "La suma de ambos números es: " + (num1 + num2);
            var resultado2 = "La resta de ambos números es: " + (num1 - num2);
            document.getElementById('solution1').innerHTML = resultado;
            document.getElementById('solution2').innerHTML = resultado2;
        } else {
            var resultado = "La multiplicación de ambos números es: " + (num2 * num1);
            var resultado2 = "La división de ambos números es: " + (num2 / num1);
            document.getElementById('solution1').innerHTML = resultado;
            document.getElementById('solution2').innerHTML = resultado2;
        }
    }
}
