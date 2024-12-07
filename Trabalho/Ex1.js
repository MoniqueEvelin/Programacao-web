let ligada = false;
function acenderApagar() {

  const luz = document.getElementById("luz");
  const botao = document.querySelector("button");

  if (ligada) {
    luz.style.backgroundColor = "gray";
    botao.textContent = "Ligar";
    ligada = false;
  }
  else {
    luz.style.backgroundColor = "yellow";
    botao.textContent = "Desligar";
    ligada = true;
  }

}