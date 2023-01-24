//exercicio-1
let a =10;
let b =5;

console.log('soma ' + (a+b));
console.log('subtracao ' + (a-b));
console.log('multiplicação ' + ('a * b'));
console.log('divisão ' + (a / b));
console.log('modulo ' + (a % b));

//exercicio-2
let num1 = 10;
let num2 = 5;

if (num1 >= num2){
    console.log(num1);
}else{
    console.log(num2);
}
//exercicio-3
let n1 =10;
let n2 =50;
let n3 =30;

if (n1 >= n2 && n1 >= n3){
    console.log(n1);
}else if (n2 >= n1 && n2 >= n3){
    console.log(n2);
}else {
    console.log(n3);
}
//exercicio-4
let p1 = -1;

if (p1 > 0){
    console.log('positive');
}else if (p1 < 0){
    console.log('negative');
}else{
    console.log('zero')
}
//exercicio-5
let x = 50;
let y = 60;
let z = 60;

let total = x + y + z
let angulo180 = true;

if (total === 180){
    console.log(angulo180)
}else{
    console.log('a soma das constantes nao representa um triangulo');
}
//exercicio-6
let chess = 'bishop';
switch(chess.toLowerCase){
    case 'pawn'
        console.log('move forward just one square');
            break;
    case 'bishop'
        console.log('move diagonally as many squares as it likes');
            break;
    case 'knight'
        console.log('moves one square left or right horizontally and then two squares up or down vertically');
            break;
    case 'rook'
        console.log(' move as many squares as it likes left or right horizontally');
            break;
    case 'queen'
        console.log('move as many squares as it likes left or right horizontally, or as many squares as it likes up or down vertically');
            break;
    case 'king'
        console.log('move one square in any direction');
            break;
}
 //exercicio-7
 let grade = 150;
 
 if (grade > 100 || grade < 0){
    console.log('nota invalida')
 }else if (grade >= 90){
    console.log('A')
 }else if (grade >= 80){
    console.log('B')
 }else if (grade >= 70){
    console.log('C')
 }else if (grade >= 60){
    console.log('D')
 }else if (grade >= 50){
    console.log('E')
 }else{
    console.log('F')
}

