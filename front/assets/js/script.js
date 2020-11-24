/*Case sensitive = reconhece letras maiusculas e minusculas
var escopo(fronteiras do codigo) global  /let escopo local /cost não muda a sua forma 
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByTagName('nome')
por Classe: getElementsByClassName('.nome')
por Seletor: querySelector('#email'ou 'input#email' ou 'input.email')*/

/*acessando o elemento input nome pelo id */
let nome = window.document.getElementById('nome')
/*acessando o elemento input email pelo id */
let email = document.querySelector('#email')
/*acessando o elemento input titulo pelo id */
let titulo = document.querySelector('#titulo')
/*acessando o elemento input texto pelo id */
let texto = document.querySelector('#texto')
/*acessando o elemento mapa pelo id*/
let mapa = document.querySelector('#mapa')

/*Fazer um uma valçidação se esta ou não prenchido os campos email, nome, texto */
let nomeok = false
let emailok = false
let textook = false
let titulook = false

/*Outro modo de também realizar alterações no style da pagina contato aumentar o tamanho do quadrado do nome*/
nome.style.width = '98%'
/*Outro modo de também realizar alterações no style da pagina contato aumentar o tamanho do quadrado do nome*/
email.style.width = '98%'

/*validação do campo nome*/
function validaNome(){
    /*acessando o elemento nome */
    let txtNome = document.querySelector('#txtNome')
    /*ler o valor que esta dentro do input e seu tamanho*/
    if(nome.value.length < 3){
        /*Mostra o texto se esta correto*/
        txtNome.innerHTML= 'Nome Inválido'
        /*Mostra a cor do texto */
        txtNome.style.color = 'red'
    }else{
         /*Mostra o texto se esta correto*/
         txtNome.innerHTML = 'Nome Válido'
        /*Mostra a cor do texto */
        txtNome.style.color = 'green'
        /*verificação*/
        nomeok = true
    }
}

/*validação do campo email*/
function validaEmail(){
    /*acessando o elemento email */
    let txtEmail = document.querySelector('#txtEmail')
    /*verficando se tem o caracter @ e o ponto se tiver retorna 1 se não rentorna -1*/
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail Inválido'
         /*Mostra a cor do texto */
         txtEmail.style.color = 'red'
    }else{
        /*Mostra o texto se esta correto*/
        txtEmail.innerHTML = 'E-mail Válido'
        /*Mostra a cor do texto */
        txtEmail.style.color = 'green'
        /*verificação*/
        emailok = true
    }    
}

/*validação do campo titulo*/
function validaTitulo(){
    /*acessando o elemento titulo */
    let txtTitulo = document.querySelector('#txtTitulo')
    /*colocando um limite no preenchimento de texto até 100 caracteres*/
    if(titulo.value.length >= 20){
        txtTitulo.innerHTML = 'Digite no máximo 20 caracteres'
        txtTitulo.style.color = 'red'
        /*o block traz a mensagem que pode ate 50 */
        txtTitulo.style.display = 'block'
    }else{
        /*retira o excesso de texto do titulo */
        txtTitulo.style.display = 'none'
        /*verificação*/
        titulook = true
    }
}

/*validação do campo texto*/
function validaTexto(){
    /*acessando o elemento texto */
    let txtTexto = document.querySelector('#txtTexto')
    /*colocando um limite no preenchimento de texto até 100 caracteres*/
    if(texto.value.length >= 100){
        txtTexto.innerHTML = 'Digite no máximo 100 caracteres'
        txtTexto.style.color = 'red'
        /*o block traz a mensagem que pode ate 100 */
        txtTexto.style.display = 'block'
    }else{
        /*retira o excesso de texto */
        txtTexto.style.display = 'none'
        /*verificação*/
        textook = true
    }
}

/*Validar o eviar*/
function enviar(){
    if(nomeok == true && emailok== true && textook == true){
        alert('Formulário enviado com sucesso!')
    }else{
        alert('Preenche o formulário corretamente antes de enviar')
    }
}

/*Cria uma função para o Mapa ampliar e voltar ao normal*/
/*Passar o maouse o mapa aumenta*/
function mapazoom(){    
    mapa.style.width = '500px'
    mapa.style.height = '300px'
}
/*retirar o maouse e o mapa volta ao normal*/
function mapanormal(){
    mapa.style.width = '250px'
    mapa.style.height = '150px'
}