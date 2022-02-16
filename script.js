const bruto = document.getElementsByClassName("bruto");
const liquido = document.getElementsByClassName("liquido");
const pre = document.getElementsByClassName("pre");
const pos = document.getElementsByClassName("pos");
const fixado = document.getElementsByClassName("fixado");
const resultado = document.getElementsByClassName("resultado-simulacao");

// rendimento bruto = 1
// rendimento liquido = 2
var rendimento = 0;

// index pre = 1
// index pos = 2
// index fixado = 3
var index = 0;

simular = document.getElementsByClassName("simular");
simular[0].addEventListener("click", () => {
    // verificador de condições
    textoRendimento = "";
    textoIndex = "";
    if (rendimento == 1) {
        textoRendimento = "tipoRendimento=bruto";
    } else if (rendimento == 2) {
        textoRendimento = "tipoRendimento=liquido";
    } else {
        // TODO parar a execução
    }

    if (index == 1) {
        textoIndex = "tipoIndexacao=pre";
    } else if (index == 2) {
        textoIndex = "tipoIndexacao=pos";
    } else if (index == 3) {
        textoIndex = "tipoIndexacao=ipca";
    } else {
        // TODO parar a execução
    }

    

    resultado[0].classList.remove("transparente");

    // fetch("http://localhost:3000/simulacoes/?tipoRendimento=:busca&tipoIndexacao=:busca")
    fetch(`http://localhost:3000/simulacoes/?${textoRendimento}&${textoIndex}`)
        .then((response) => {
            if (response.ok) {
                return response;
            }
        })
        .then((response) => response.json())
        .then((response) => {
            document.getElementById("valor-final-bruto").textContent = response[0].valorFinalBruto;
            document.getElementById("aliquota").textContent = response[0].aliquotaIR;
            document.getElementById("valor-pago-ir").textContent = response[0].valorPagoIR;
            document.getElementById("valor-total-investido").textContent = response[0].valorTotalInvestido;
            document.getElementById("valor-final-liquido").textContent = response[0].valorFinalLiquido;
            document.getElementById("ganho-liquido").textContent = response[0].ganhoLiquido;
        })
        .catch((error) => alert("Erro na chamada dos dados. " + error));
});

limpar = document.getElementsByClassName("limpar");
limpar[0].addEventListener("click", () => {
    texto = document.querySelectorAll("input[type=text]");
    for (let i = 0; i < texto.length; i++) {
        texto[i].value = "";
    }
    numero = document.querySelectorAll("input[type=number]");
    for (let i = 0; i < numero.length; i++) {
        numero[i].value = "";
    }
    resultado[0].classList.add("transparente");
});

bruto[0].addEventListener("click", () => {
    bruto[0].classList.add("active");
    liquido[0].classList.remove("active");
    rendimento = 1;
});
liquido[0].addEventListener("click", () => {
    bruto[0].classList.remove("active");
    liquido[0].classList.add("active");
    rendimento = 2;
});

pre[0].addEventListener("click", () => {
    pre[0].classList.add("active");
    pos[0].classList.remove("active");
    fixado[0].classList.remove("active");
    index = 1;
});

pos[0].addEventListener("click", () => {
    pre[0].classList.remove("active");
    pos[0].classList.add("active");
    fixado[0].classList.remove("active");
    index = 2;
});

fixado[0].addEventListener("click", () => {
    pre[0].classList.remove("active");
    pos[0].classList.remove("active");
    fixado[0].classList.add("active");
    index = 3;
});

function validar(campo){
    if(campo == 1){
        document.getElementsByName("inicial").textContent
    }
}