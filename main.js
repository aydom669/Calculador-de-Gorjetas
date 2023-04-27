// Seleção
// ==================================================

const contaValor = document.querySelector("#valor");
const gorjeta = document.querySelector("#gorjeta");
const total = document.querySelector("#total");

// =======================================================

// Entarda de valor

let valorConta = "";
contaValor.addEventListener("input", (e) => {
  const regex = /^(\d+)?([.]?\d{0,2})?$/; // expressão regular para validar a entrada
  const valor = e.target.value; // valor inserido pelo usuário

  if (!regex.test(valor)) {
    e.target.value = valor.slice(0, -1); // remove o último caractere inserido
  }

  if (contaValor.value === "0") {
    contaValor.classList.add("erro");
  } else {
    contaValor.classList.remove("erro");
    valorConta = contaValor.value;
  }
});

// ========================================================

// VALOR DA GORJETA

let valorGorjeta = "";
const btnPorcentagem = document.querySelectorAll(".bt-gorjeta");
for (let select of btnPorcentagem) {
  select.addEventListener("click", () => {
    for (let off of btnPorcentagem) {
      off.classList.remove("active");
    }

    select.classList.add("active");

    for (let i = 0; i < select.innerText.length - 1; i++) {
      valorGorjeta += select.innerText[i];
    }
  });
}

// ========================================================

//OUTRO  VALOR DE GORJETA

const gorjetaUser = document.querySelector("#gorjetaUser");
gorjetaUser.addEventListener("click", () => {
  gorjetaUser.classList.remove("active");
  valorGorjeta = "";
});

gorjetaUser.addEventListener("input", () => {
  if (gorjetaUser.value === "0") {
    gorjetaUser.classList.add("erro");
  } else {
    gorjetaUser.classList.remove("erro");
    valorGorjeta = gorjetaUser.value;
  }
});

// ====================================================

// NUMERO DE PESSOAS

let numPessoas = 0;
const qtPessoas = document.querySelector("#qtyPessoas");
qtPessoas.addEventListener("input", () => {
  if (qtPessoas.value === "0") {
    qtPessoas.classList.add("erro");
  } else {
    qtPessoas.classList.remove("erro");
    numPessoas = qtPessoas.value;
  }
});

// ===================================

// a Soma

setInterval(() => {
  if (
    valorConta !== "" &&
    valorGorjeta !== "" &&
    qtyPessoas.value !== "" &&
    qtyPessoas.value !== "0"
  ) {
    gorjeta.innerText = `$${(
      (parseFloat(valorConta) * (parseFloat(valorGorjeta) / 100)) /
      parseFloat(qtyPessoas.value)
    ).toFixed(2)}`;

    total.innerText = `$${(
      (parseFloat(valorConta) * (parseFloat(valorGorjeta) / 100) +
        parseFloat(valorConta)) /
      parseFloat(qtyPessoas.value)
    ).toFixed(2)}`;
  } else {
    gorjeta.innerText = "0.00";
    total.innerText = "0.00";
  }
}, 1000);

// ================================

// Reset

const resetar = document.querySelector("#bt-reset");
resetar.addEventListener("click", () => {
  for (let select of btnPorcentagem) {
    select.classList.remove("active");
  }

  contaValor.value = "";
  qtPessoas.value = "";
  valorGorjeta = "";
  valorConta = "";
  gorjeta.innerText = "0.00";
  total.innerText = "0.00";
});

/// ==================================
