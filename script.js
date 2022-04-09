var numeroSecreto = parseInt(Math.random() * 11);
var chances = 0;

function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  var tentativas = document.getElementById("chances");

  if (isNaN(chute)) {
    resultado.innerHTML = "Insira um Nº :)";
  } else if (chute < 0 || chute > 10) {
    resultado.innerHTML = "Digite um número positivo de 0 a 10 ;)";
  } else {
    chances++;
    if (chances < 3) {
      if (chute == numeroSecreto) {
        resultado.innerHTML = "Acertou!";
        tentativas.innerHTML = "Chance: " + chances + "/3";
      } else if (chute > numeroSecreto) {
        resultado.innerHTML = "Tente algo menor! :)";
        tentativas.innerHTML = "Chance: " + chances + "/3";
      } else if (chute < numeroSecreto) {
        resultado.innerHTML = "Tente algo maior! :(";
        tentativas.innerHTML = "Chance: " + chances + "/3";
      }
    } else if (chances == 3 && chute == numeroSecreto) {
      resultado.innerHTML = "ACERTOU!!! <br> UFA, achei que não iria acertar";
      tentativas.innerHTML = "Chance: " + chances + "/3";
    } else {
      resultado.innerHTML =
        "Queimou todas as chances :/ <br> o Nº era: " + numeroSecreto;
      tentativas.innerHTML = "Chance: " + chances + "/3";
    }
  }
}