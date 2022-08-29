let nome
let idade
console.log(typeof nome, typeof idade)//Foram impressos valores indefinidos(undefined), ou seja, a variavel foi criada e está apenas esperando para receber um valor

nome = prompt('Qual o seu nome??')
idade = prompt('Qual a sua idade??')
console.log(typeof nome, typeof idade)//Foram impressos valores de String gerados pelo prompt
console.log(`Olá ${nome}, você tem ${idade} anos.`)

