//exercicio-1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}
//exercicio-2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for(let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
        console.log(sum);
}
//exercicio-3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for(let index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
}

let average = sum / numbers.length;
    console.log(avarage);
//exercicio-4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for(let index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
}

let average = sum / numbers.length;

if (average > 20){
    console.log('valor maior que 20')
}else{
    console.log('valor menor ou igual a 20')
}
//exercicio-5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let zico = [0];

for(let index = 0; index < numbers.length; index += 1){
    if (numbers[index] > zico){
        zico = numbers[index];
    }
}
    console.log(zico);
//exercicio-6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = [0];
for (let index = 0; index < numbers.length; index += 1){
    if(number[index] % 2 !=== 0) {
       odd += 1;
    }
}
    else if (odd === 0) {
        console.log('nenhum valor ímpar encontrado')
    }else {
        console.log(odd)
    }
//exercicio-7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let vasco = [0];

for(let index = 0; index < numbers.length; index += 1){
    if (numbers[index] < vasco){
        vasco = numbers[index];
    }
}
    console.log(vasco);
//exercicio-8
let twentyfive = [];

for (let index = 1; index <= 25; index += 1) {
  twentyfive.push(index);
}
    console.log(twentyfive);
//exercicio-9
let twentyfive = [];

for (let index = 1; index <= 25; index += 1) {
  twentyfive.push(index);
}
    for (let index = 0; index < twentyfive.length; index += 1) {
        console.log(twentyfive[index] / 2);
      }
      