// Alteração do título da página
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// Cálculo do IMC do paciente
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var tdImc = paciente.querySelector(".info-imc");

    var alturaEhValida = true;
    var pesoEhValido = true;

    var peso = tdPeso.textContent;
    if (peso <= 0 || peso > 600) {
        console.log("Peso inválido!");
        pesoEhValido = false;
    }

    var altura = tdAltura.textContent;
    if (altura <= 0 || altura > 3) {
        console.log("Altura inválida!");
        alturaEhValida = false;
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
}