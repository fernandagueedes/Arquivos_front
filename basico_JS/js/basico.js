//console.log() serve para mostrar o algoritmo 
console.log("hello world, no arquivo js!");

//concatenação
console.log( 1 + "1");
//JS entedeu que era uma substituição mesmo sendo uma STRiNG e um tipo numerico
console.log(1 - "1");

//forma para criar uma variavel, usa-se o var e usa-se o let, o let não deixa recreviar a variavel, o var deixa
//declaração de variavel com a palavra reservada var
var x = 10;
//declaração de variavel com a palavra reservada let
let y = 11;

var x = 11;
//let y = 11

//typeoff retorna o tipo do dado (string, numerico, objeto array...)
//mas caso queira, usamos o tipo number para numericos (int ou float/double)
console.log(typeof(x));

//alguns casos o JS não consegue calcular uma string como numerico
console.log("aula" * 2) //dá um erro NaN (not a number - não é um número) pois tentei fazer uma multiplicação entre um nome (string) e um número

let numero = Number(50) //desse forma mesmo que receba uma string irá converter em um numero devido o Number

//Tipo String para char e string
let numeroString = String(50)
let casasDecimais = 10.9988

console.log(typeof(numero));
console.log(typeof(numeroString))
//exemplo onde o type retorna tipo NUMBER para um numero com casas decimais
console.log(typeof(casasDecimais))

//biblioteca MATH para fazer a potencia do número
console.log(Math.pow(2, 2))

//random, para entregar um numero aleatorio (e a cada vez que executa ele gera outro número aleatório)
console.log(Math.random())


//multiplica pelo número limitador da quantidade de numeros que eu quero, 
//ou seja, se multiplicou por 20 ele vai de 0 a 20. se multiplica por 10 ele vai de 0 a 10.
console.log(parseInt(Math.random() * 20)) 

//opaseInt converte o numero random para inteiro
console.log(parseInt(Math.random() * 20))

/*document.querySelector('h1').innerHTML ="Meu titulo no JS"
document.getElementById('tituloId').innerHTML = "titulo do id no js"
document.querySelector('.tituloClass').innerHTML = "alterado pela classe"
//document.getElementsByClassName('tituloClass').innerHTML = "h1 alterado pelo class"
*/

//vetor em JavaScript, segue o mesmo padrão Java
//os dados tem que ser do mesmo tipo...
var vetorNumero = [1, 2, 3, 4, 5]

//recupera o indice do vetor e retorna o valor no indice
console.log(vetorNumero[0])

//parecido com o void do Java
function multiplicar(a, b){
    console.log(a * b)
}


//chama a função para ser executada
multiplicar(10, 10);

//funcao com retorno tipo numerico
function funcaoComRetorno(x, y){
    return x * y
}

console.log(funcaoComRetorno(10, 5))

//ArrowFunction
var mensagemOla = () => {
    return "Olá novamente"
}

console.log(mensagemOla())

document.getElementById('recebeuFoco').onfocus = function(){focado()
}

function focado(){
    document.getElementById('recebeuFoco').style.background = "green"
}

function valorDigitado(){
    let recebido = document.getElementById('recebeuFoco').value;
    alert("valor recebido via input: " + recebido);


}