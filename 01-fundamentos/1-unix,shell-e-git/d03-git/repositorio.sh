Crie uma pasta no seu computador
    
    mkdir trybe

Acesse a pasta que você acabou de criar

    cd trybe

Inicie o versionamento

    git init

Abra a pasta no VSCode

    code .

Crie um arquivo chamado README.md

    touch README.md

Adicione o arquivo novo em staging e realize um commit

    git add .
    git commit -m 'cria README.md'

Crie uma nova branch

    git checkout README

Retorne para a branch main

    git branch main

faça um merge

    git merge

Acesse a branch main e crie uma branch nova chamada atualiza-readme

    git branch main
    git checkout atualiza-readme

Acesse a branch atualiza-readme e crie um arquivo chamado infos.txt

    git checkout atualiza-readme
    touch infos.txt

Adicione as alterações em staging e realize um commit

    git add .
    git commit -m 'atualiza readme'
