const exibeCliente = (cpf, nome) => {
    const linha = document.createElement('tr');

    const conteudoLinha = 
    `<tr>
        <td>${cpf}</td>
        <td>${nome}</td>         
        </tr>`;

    linha.innerHTML = conteudoLinha;
    return linha;
}

const corpotabela = document.querySelector("[data-conteudo-tabela]");

listarClientes().then(exibe => {
    exibe.forEach( index => {
        corpotabela.appendChild(exibeCliente(index.cpf, index.nome))
    })
});
