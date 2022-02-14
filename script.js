simular = document.getElementsByClassName("simular")
simular[0].addEventListener('click', ()=>{
    fetch("http://localhost:3000/simulacoes")
    .then(response => response.json())
    .then(response => console.log(response))

    teste = document.getElementsByName('cdi')
    console.log(teste[0].value)
})

