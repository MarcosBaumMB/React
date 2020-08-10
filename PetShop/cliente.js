const informacoesClientes = [
    {
        cpf: 12345678912,
        nome: "teste"
    },
    {
        cpf: 11122233312,
        nome: "juca"
    }
]
const corpotabela = document.querySelector("[data-conteudo-tabela]");

const exibeCliente = () => {
    const linha = document.createElement('tr');

    const conteudoLinha = 
    `<tr>
        <td>${cpf}</td>
        <td>${nome}</td>         
        </tr>`;

    linha.innerHTML = conteudoLinha;
    return linha;
}

informacoesClientes.forEach( index => {
    corpotabela.appendChild(exibeCliente(index.cpf, index.nome));
});
