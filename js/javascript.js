const form = document.getElementById('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content');

    let enviando = `<p>enviando...</p>`

    let enviado = `<p>É isso ai! Em breve entraremos em contato!</p>`

    content.innerHTML = enviando

    setTimeout(() =>{
        content.innerHTML = enviado
    }, 2000)
})