simular = document.getElementsByClassName("simular")
simular[0].addEventListener('click', ()=>{
    fetch("http://localhost:3000/simulacoes")
    .then(response => response.json())
    .then(response => console.log(response))
})

limpar = document.getElementsByClassName("limpar")
limpar[0].addEventListener('click', ()=>{
    texto = document.querySelectorAll("input[type=text]")
    for (let i = 0; i < texto.length; i++) {
        texto[i].value = ""; 
    }
    numero = document.querySelectorAll("input[type=number]")
    for (let i = 0; i < numero.length; i++) {
        numero[i].value = ""; 
    }
})

bruto = document.getElementsByClassName("bruto")
liquido = document.getElementsByClassName("liquido")
pre = document.getElementsByClassName("pre")
pos = document.getElementsByClassName("pos")
fixado = document.getElementsByClassName("fixado")

bruto[0].addEventListener('click', ()=>{
    bruto[0].classList.add("active")
    liquido[0].classList.remove("active")
})
liquido[0].addEventListener('click', ()=>{
    bruto[0].classList.remove("active")
    liquido[0].classList.add("active")
})

pre[0].addEventListener('click', ()=>{
    pre[0].classList.add("active")
    liquido[0].classList.add("active")
})