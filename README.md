# Dungeon-Game
## Disciplina: Paradigma de Programação Imperativo e Orientado a Objeto (9795 – Turma 1) Segundo Trabalho Prático 
## Objetivo: O trabalho tem como objetivo a implementação de uma aplicação para aplicar os conceitos de tipos abstratos de dados; 
Instruções: 
• O trabalho poderá ser feito em grupos de 1 a 3 membros; 
• A implementação da aplicação deverá ser feita em uma das linguagens a seguir: ◦ C++; 
◦ Python;  
◦ JavaScript; 
◦ Java; 
• Caso a equipe deseje utilizar outra linguagem deverá falar com o professor; • O trabalho tem valor de 0 a 10 e corresponde a 20% da segunda avaliação periódica da disciplina; 
• Deverão ser entregues os seguintes itens: 
1. Os códigos-fonte; 
2. Um passo a passo de como compilar (se necessário) e executar o programa; ▪ O passo a passo para a compilação não deve depender de uma IDE especifica! Além do mais, é importante que conste o compilador utilizado e qual sua versão. ▪ No caso das linguagens interpretadas, deverá ser informada a versão do interpretador e também um link para download do mesmo (ou então como instalá-lo utilizando algum repositório, exemplo: apt do Debian/Ubuntu). 
▪ Como informar a entrada, onde a entrada deve estar localizada, como informar os parâmetros do algoritmo, etc. 
• Os itens acima deverão ser entregues via classroom, em um arquivo compactado que deve seguir o padrão: 
◦ NomeAluno1_RAXXXXX_NomeAluno2_RAXXXXX_NomeAluno3_RAXXXX.zip; ▪ O formato do arquivo para submissão poderá ser .ZIP, .RAR ou .TAR 
• A data limite para a entrega do trabalho será combinada em aula; 
Descrição: A aplicação a ser implementa será um jogo: 
• O jogo terá a temática de exploração de uma masmorra por um grupo de aventureiros; • A masmorra será composta por 3 tipos de monstros: 
◦ Dragões;  
◦ Orcs; 
◦ Mortos-vivos; 
• Para a exploração da masmorra o jogador irá compor um grupo de aventureiros que poderão ser: 
◦ Druidas; 
◦ Magos; 
◦ Guerreiros; 
• Cada monstro tem suas características conforme descritas a seguir: 
◦ Dragões:  
▪ 12 pontos de vida;  
▪ 50% de redução de dano mágico; 
◦ Mortos-vivos:
Universidade Estadual de Maringá 
Centro de Tecnologia 
Departamento de Informática 
Prof: Nilton Luiz Queiroz Junior 
Disciplina: Paradigma de Programação Imperativo e Orientado a Objeto (9795 – Turma 1) 
▪ 8 pontos de vida; 
▪ 50% de redução de dano veneno; 
◦ Orcs:  
▪ 6 pontos de vida; 
▪ 50% de redução de dano de físico; 
• Um aventureiro só pode realizar uma ação por masmorra, após isso ele abandona o grupo. • As ações de cada aventureiro são descritas a seguir:  
◦ O mago ataca e acerta os 4 primeiros monstros que estão no campo de batalha causando 4 de dano mágico; 
◦ O druida ataca e acerta os 3 primeiros monstros que estão no campo de batalha causando 5 de dano de veneno em cada monstro; 
◦ O guerreiro ataca e acerta os 2 primeiros monstros que estão no campo de batalha causando 6 de dano físico em cada monstro; 
• As regras do jogo são as seguintes: 
◦ Inicialmente o jogador monta sua equipe escolhendo quantos aventureiros de cada tipo a equipe terá; 
▪ Deve ser definida uma quantidade máxima de aventureiros por equipe, essa quantidade será uma decisão do grupo; 
• Inclusive, caso o grupo deseje, esses valores poderão ser usados para definir a dificuldade do jogo. 
◦ Após montar sua equipe, ela é colocada na masmorra; 
▪ A masmorra é organizada em níveis, e cada nível tem uma quantidade maior de monstros. 
• A sugestão é que cada nível possua o valor do nível + 3 monstros aguardando os aventureiros para o combate; 
• Esses monstros estarão organizados em uma fila que deverá ser construída assim que a equipe de aventureiros alcançar o nível. 
◦ A fila deve ser construída de maneira aleatória, ou seja, ao criar a fila, deverá ser feito o sorteio de um monstro para cada posição; 
◦ Dentro de um nível da masmorra, o jogador escolhe quais aventureiros irão agir. Cada aventureiro faz sua ação e então é descartado, por exemplo: 
▪ Suponha que a equipe de aventureiros é formada por 5 magos, 5 guerreiros, e 5 druidas; 
▪ Assuma que no nível 3 da masmorra exista a seguinte fila de monstros: 

Ordem do monstro 
Tipo de monstro 
Vida do monstro 

1 Orc 6 
2 Dragão 12 
3 Dragão 12 
4 Morto-vivo 8 
5 Morto-vivo 8 
6 Orc 6 
▪ Se o jogador escolher usar um guerreiro, que ataca dois monstros com 6 de dano do tipo físico, ele ficará ainda no nível 3 da masmorra e sua equipe será composta por 5 magos, 4 guerreiros e 5 druidas. Além do mais os monstros ficarão no seguinte estado:
Universidade Estadual de Maringá 
Centro de Tecnologia 
Departamento de Informática 
Prof: Nilton Luiz Queiroz Junior 
Disciplina: Paradigma de Programação Imperativo e Orientado a Objeto (9795 – Turma 1) 

Ordem do monstro 
Tipo de monstro 
Vida do monstro 

1 Orc 3 
2 Dragão 6 
3 Dragão 12 
4 Morto-vivo 8 
5 Morto-vivo 8 
6 Orc 6 
◦ Vale ressaltar que quando um monstro tem resistência a um tipo de dando, a resistência é aplicada antes que os pontos de vida do monstro sejam subtraídos. 
▪ No exemplo dado anteriormente, o guerreiro atacou um Orc e um Dragão. Como o Dragão não possui resistência ao tipo de dado do guerreiro (dano físico) foram descontados 6 pontos de vida do Dragão. No caso do Orc, que possui resistência a dano físico de 50%, o dano causado pelo Guerreiro foi reduzido pela metade, desta forma, foram descontados apenas 3 pontos de vida do Orc. 
◦ O jogo acaba quando não houverem mais os aventureiros para serem usados; ▪ Caso o último aventureiro seja usado para terminar de matar os monstros restantes no nível, considere que o jogador avançou de nível. 
Observações sobre a implementação: 
• A equipe deverá implementar tipos para representar as entidades do jogo e organizá-los conforme julgar melhor; 
• O jogo deve ser implementado para que seja de fácil extensão. 
◦ Ou seja, para adicionar outros tipos de dano, monstros (com diferentes porcentagens de redução, por exemplo, um monstro 65% de redução de dano físico) e classes não deve ser necessária a adição de muitas linhas nas abstrações existentes (de preferência não se deve alterar as abstrações existentes). 
• Caso a equipe deseje outros tipos de dano, monstros ou classes, ela poderá implementar, porém as classes que causam dano deverão ser restritas a um único tipo de dano e o monstros também só poderão possuir resistência a tipo de dano.
