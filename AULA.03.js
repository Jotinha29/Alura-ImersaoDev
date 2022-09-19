var numeroSecreto = parseInt(Math.random()* 11);

function Chutar(){
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  //se o chute for igual ao numeroSecreto acertou
  if (chute == numeroSecreto){
    elementoResultado.innerHTML = "PARABENS você acertou";
  }  else if (chute > 10){
    elementoResultado.innerHTML = "ERRO: Numero maior que 10 - Informe outro numero de 1 a 10";
  }  else if (chute < 0){
    elementoResultado.innerHTML = "ERRO: Numero menor que 0 - Informe outro numero de 1 a 10";
  }  else {
    elementoResultado.innerHTML = "POXA você errou, TENTE NOVAMENTE";
  }
}
