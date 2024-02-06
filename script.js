// script.js

function somar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var res = num1 + num2;
    document.getElementById("resultadoSoma").textContent = res.toFixed(2);
}

function subtrair() {
    var num3 = parseFloat(document.getElementById("num3").value);
    var num4 = parseFloat(document.getElementById("num4").value);

    var resultado = num3 - num4;

    document.getElementById("resultadoSub").innerText = resultado;
}

function multiplicar() {
    var num5 = parseFloat(document.getElementById("num5").value);
    var num6 = parseFloat(document.getElementById("num6").value);

    var resultado = num5 * num6;

    document.getElementById("resultadoMul").innerText = resultado;
}

function dividir() {
    var num7 = parseFloat(document.getElementById("num7").value);
    var num8 = parseFloat(document.getElementById("num8").value);

    if (num8 !== 0) {
        var resultado = num7 / num8;
        document.getElementById("resultadoDiv").innerText = resultado;
    } else {
        alert("Não é possível dividir por zero.");
    }
}
function calcularMedia() {
    var num9 = parseFloat(document.getElementById("num9").value);
    var num10 = parseFloat(document.getElementById("num10").value);
    var num11 = parseFloat(document.getElementById("num11").value);

    if (!isNaN(num9) && !isNaN(num10) && !isNaN(num11)) {
        var media = (num9 + num10 + num11) / 3;
        document.getElementById("resultadoMedia").innerText = media.toFixed(2);
    } else {
        alert("Por favor, insira valores numéricos válidos para calcular a média.");
    }
}