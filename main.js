const form = document.getElementById('form');
const nome = [];
const contato = [];
let linhas = '';

form.addEventListener ('submit', function(e) {
    e.preventDefault();
    adicionalinha();
    atualizaTabela();
});

function adicionalinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputContato = document.getElementById('numero-contato');
    const novoNome = inputNome.value.trim();
    const novoContato = parseFloat(inputContato.value.trim());

    if(!contato.includes(novoContato)) {
        nome.push(novoNome);
        contato.push(novoContato);
    
        let linha = '<tr>';
        linha += '<td>' + novoNome + '</td>';
        linha += '<td>' + novoContato + '</td>';
        linha += '</tr>';
    
        linhas += linha;
        console.log(contato);
    } 
    else {
        alert('O contato já foi inserido anteriormente.');
    }

    inputNome.value = '';
    inputContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}