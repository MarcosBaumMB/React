const formCadastrCliente = document.querySelector('[data-form]')

formCadastrCliente.addEventListener("submit", event => {
    event.preventDefault()

    const nome = event.target.querySelector('[data-nome]').value
    const cpf = event.target.querySelector('[data-cpf]').value

    if (validaCPF(cpf)){
        cadastrarClientes(nome, cpf)
    }
    else{
        alert('CPF não é válido')
    }        
})