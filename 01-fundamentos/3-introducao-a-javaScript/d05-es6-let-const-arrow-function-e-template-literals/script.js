// exercicio-1
function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
//   console.log('Idade fora do for:', idade) // retire essa linha ao implementar o tipo de variável correta.
}
imprimeIdade()
// exercicio-2
    let pessoa = {
    nome: 'Henri',
    idade: 20
  }
  pessoa = {
    nome: 'Luna',
    idade: 19
  }
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);
// exercicio-3
  let favoriteFood = 'Lasanha';
  favoriteFood = 'Hamburguer';
  console.log(favoriteFood);
// exercicio-4
const name = 'Adriana';
const lastName = 'Soares';
console.log(`Olá, ${name} ${lastName}!`);
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);
// exercicio-5
const numeroAleatorio = () => Math.random()

  console.log(numeroAleatorio());
//exercicio-6
const hello = nome => `Olá, ${nome}!`

  console.log(hello('James'));
//exercicio-7
const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`

  console.log(nomeCompleto('James', 'Baxter'));
//exercicio-8
const speedCar = (speed) => speed >= 120 ? 'Você ultrapassou o limite de velocidade`' : `Você está na velocidade permitida`

console.log(speedCar(90));