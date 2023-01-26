//exercicio-1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
    console.log( 'Bem-vinda, ' + info.personagem);

    info['recorrente'] = 'Sim';

    console.log(info.recorrente);

    for (let index in info) {
        console.log(info[index])
    }
    let info2 = {
        personagem: 'Tio Patinhas',
        origem: 'Christmas on Bear Mountain, Dell s Four Color Comics #178',
        nota: 'O último MacPatinhas',
        recorrente: 'Sim',
      };
      for (let properties in info) {
        if (
          properties === 'recorrente' &&
          info[properties] === 'Sim' &&
          info2[properties] === 'Sim'
        ) {
          console.log('Ambos recorrentes');
        } else {
          console.log(info[properties] + ' e ' + info2[properties]);
        }
      }
//exercicio-2
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' é ' + leitor.livrosFavoritos[0].titulo + '.');

  leitor.livrosFavoritos.push ( {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  })
  console.log(leitor.livrosFavoritos);
  console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');