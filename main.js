const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhosenha = 12;
numeroSenha.textContent = tamanhosenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letraMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '012345689';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha_botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');
 
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhosenha > 1) {
        //tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    
    ()
}