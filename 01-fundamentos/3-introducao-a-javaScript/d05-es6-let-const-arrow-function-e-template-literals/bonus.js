const substituaX = nome => {
    const frase = 'Tryber x aqui!';
    const arrayFrase = frase.split(' ');

for(let index = 0; index < arrayFrase.length; index +=1) {
    if(arrayFrase[index] === 'x') {
        arrayFrase[index] = nome;
    }
 }
    return arrayFrase.join(' ');
};
    console.log(substituaX(`Thiago Duarte`));

const minhasSkills = parangole => {substituaX()
    const skills = ['HTML SEMÂNTICO', 'CSS',  'JavaScript'];
    let skillsMine = `
    ${parangole}
    Minhas três principais habilidades são :`;
    for(let index= 0; index < skills.length; index += 1) {
        skillsMine = `${skillsMine}
        - ${skills[index]}`;
    }
        return skillsMine;
}
    console.log(minhasSkills(substituaX(`Thiago Duarte`)));