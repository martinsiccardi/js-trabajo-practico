function sumar()  {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;

    var suma = parseInt(numero1) + parseInt(numero2)

    document.writeln(suma);
}

function restar()  {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;

    var resta = parseInt(numero1) - parseInt(numero2)

    document.writeln(resta);
}

function multiplicar()  {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;

    var multiplicacion = parseInt(numero1) * parseInt(numero2)

    document.writeln(multiplicacion);
}

function division()  {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;

    var dividir = parseInt(numero1) / parseInt(numero2)

    document.writeln(dividir);
}