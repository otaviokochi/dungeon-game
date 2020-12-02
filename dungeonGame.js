const tad = require('./tad.js');
const prompt = require('prompt-sync')();


async function dungeonGame() {
  let numberOfAdventurers;
  const dificulty = await tad.getDificulty();
  switch (dificulty.toLowerCase()) {
    case 'facil': numberOfAdventurers = 30;
      break;
    case 'intermediario': numberOfAdventurers = 20;
      break;
    case 'dificil': numberOfAdventurers = 15;
      break;
    default: console.log('Dificuldade inválida\nOpções:\tfacil\tintermediario\tdificil');
      process.exit(0);
  };

  console.log("O número de aventureiros para esse jogo é: ", numberOfAdventurers);
  const adventurers = tad.createAdventurersArray(numberOfAdventurers);
  if(!adventurers)  process.exit(0);
  let dungeonLevel = 1;
  let monsters = tad.createMonsterArray(dungeonLevel);
  while(adventurers.reduce(((accumulator, adventurous) => accumulator || adventurous.quantity ), false)) {
    console.log('Ordem dos Monstro | Tipo do Monstro | Vida do Monstro');
    for (let i = 0; i < monsters.length; i ++) {
      if(monsters[i].getMonsterName() !== 'mortos-vivos')
        console.log(`${i + 1}\t\t\t${monsters[i].getMonsterName()}\t\t\t${monsters[i].getMonsterLife()}`);
      else
        console.log(`${i + 1}\t\t\t${monsters[i].getMonsterName()}\t\t${monsters[i].getMonsterLife()}`);
    }
    console.log('Quantidade de seus aventureiros:\nGuerreiro\tMagos\tDruidas');
    console.log(`${adventurers[0].quantity}\t\t${adventurers[1].quantity}\t${adventurers[2].quantity}`);
    console.log('Escolha qual aventureiro irá atacar: ');
    let adventurous = prompt(`Qual aventureiro deseja utilizar? Digite 0 para Guerreiro | 1 para Mago | 2 para Druida: `);
    let stillHadAdventurous = false;
    switch (adventurous) {
      case '0': if(adventurers[adventurous].quantity > 0) {
          adventurers[adventurous].quantity--;
          stillHadAdventurous = true;
        }
        else  console.log("Você não possui mais Guerreiros!");
        break;
      case '1': if(adventurers[adventurous].quantity > 0){
          adventurers[adventurous].quantity--;        
          stillHadAdventurous = true;
        } 
        else  console.log("Você não possui mais Magos!");
        break;
      case '2': if(adventurers[adventurous].quantity > 0) {
          adventurers[adventurous].quantity--;        
          stillHadAdventurous = true;
        }
        else  console.log("Você não possui mais Druidas!");
        break;
      default: console.log("Opção Inválida!");
    }
    if(stillHadAdventurous){
      for (let i = 0; i < adventurers[adventurous].getHowManyMonster(); i ++) {
        monsters[i] && monsters[i].setMonsterLife(adventurers[adventurous].getDamage(), adventurers[adventurous].getDamageType());
      }
      for (let i = adventurers[adventurous].getHowManyMonster(); i >= 0; i --) {
        if(monsters[i] && monsters[i].getMonsterLife() <= 0)
          monsters = tad.deleteMonsterFromArray(monsters, i);
      }
    }
    if(monsters.length === 0) {
      dungeonLevel++;
      monsters = tad.createMonsterArray(dungeonLevel);
      console.log(`\n\nVOCÊ SUBIU DE NÍVEL ${dungeonLevel}\n\n`);
    }
  }
  console.log(`Você Perdeu!!\nNível Alcançado: ${dungeonLevel}` );
}

dungeonGame();