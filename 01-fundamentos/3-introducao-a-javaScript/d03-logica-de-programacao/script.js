//exercicio-1
let word = 'tryber';
let drow ='';

for(let index = word.length -= 1; index >= 0; index -= 1){
    drow += word[index]
}
console.log(drow);
//exercicio-2
let array = ['java', 'javascript', 'python', 'html', 'css'];
let bword = [0];
let sword = [0];

for(let index = 0; index < array.length; index += 1){
    if (array[index].length > bword.length){
        bword = array[index];
    }
}
    console.log(bword)

for(let index = 0; index < array.lenght; index +=1){
    if (array[index].length < sword.length){
        sword = array[index];
    }
}
    console.log(sword)