crie um diretório chamado unix_tests e navegue até ele.

    mkdir unix_tests
    cd unix_tests

Crie um arquivo de texto com o nome trybe.txt.

    touch trybe.txt

Crie uma cópia do arquivo trybe.txt com o nome trybe_backup.txt.

    cp trybe.txt trybe_backup.txt

Renomeie o arquivo trybe.txt.

    mv trybe.txt trybe-old.txt

Dentro de unix_tests, crie um novo diretório chamado backup.

    cd unix_tests
    mkdir backup

Mova o arquivo trybe_backup.txt para o diretório backup.

    mv trybe_backup.txt backup

Dentro de unix_tests, crie um novo diretório chamado backup2.

    cd unix_tests
    mkdir backup2

Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.

    mv backup/trybe_backup.txt backup2

Apague a pasta backup.

    rmdir backup

Renomeie a pasta backup2 para backup.

mv backup2 backup

Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.

    ls -a

Apague o diretório backup.

    rmdir -rd backup

Limpe o terminal.

    clear

Para os próximos dois exercícios, crie, de forma manual, na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt:
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL

    cat skills.txt

Mostre na tela as 5 primeiras skills do arquivo skills.txt.

    head -n 5 skills.txt

Mostre na tela as 4 últimas skills do arquivo skills.txt.

    tail -n 4 skills.txt

Apague todos os arquivos que terminem em .txt.

    rm -rf *.txt
