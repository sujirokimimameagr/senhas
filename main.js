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
    geraSenha();
}
function aumentaTamanho(){
    if(tamanhosenha <20 ){
        //tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent=tamanhoSenha;
    geraSenha()
}

for(i = 0; i < checkbox.length;i++) {
    checkbox[i].onclick = geraSenha;
}

geraSenha();

function geraSenha(){
    let alfabeto ='';
    if(checkbox [0]. checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if(checkbox [1]. checked) {
        alfabeto = alfabeto + letrasMinusculas;
    }
    if(checkbox [2]. checked) {
        alfabeto = alfabeto + numeros;
    }
    if(checkbox [3]. checked) {
        alfabeto = alfabeto + simbolos;
    }
}
 for (let i=0; i < tamanhosenha; i++){
    let numeroAleatorio = Math.random()* alfabeto.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + alfabeto[numeroAleatorio];
 } 
 campoSenha.value = senha;
 classificaSenha(alfabeto.length);
  
}

function  classificaSenha(tamanhoAlfabeto){
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    console.log(entropia);
    forcaSenha.classList.remove('fraca','media','forte');
    if(entropia >57){
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia < 57) {
        forcaSenha.classList.add('media');
    } else if ( entropia <= 35) {
        forcaSenha.classList.add('fraca');
    }
    const valorEntropia = document.querySelector('.entropia');
    valorEntropia.textContent = “um computador pode levar até” +Math.floor(2**entropia/(100e6*60*60*24)) + “ dias para descobrir esse senha”;
          }

