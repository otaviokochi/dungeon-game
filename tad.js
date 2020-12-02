const prompt = require('prompt-sync')();

function Monster(name, life, defenseT, defenseP) {
    const monsterName = name;
    let monsterLife = life;
    const defenseType = defenseT;
    const defensePercent = defenseP;

    this.getMonsterName = () => {
        return monsterName;
    }

    this.getMonsterLife = () => {
        return monsterLife;
    }

    this.setMonsterLife = (life, attackType) => {
        if (monsterLife >= 0) {
            if(attackType === this.getDefenseType())
                monsterLife -= life * this.getDefensePercent()/100;
            else
                monsterLife -= life
        }
        else {
            monsterLife = 0;
        }
    }

    this.getDefenseType = () => {
        return defenseType;
    }

    this.getDefensePercent = () => {
        return defensePercent;
    }
}


function Adventurous(name, damageT, dam, howManyMonster) {
    const adventurousName = name;
    const damageType = damageT;
    const damage = dam;
    const howManyMonstersAreHit = howManyMonster;

    this.getAdventurousName = () => {
        return adventurousName;
    }

    this.getDamageType = () => {
        return damageType;
    }

    this.getDamage = () => {
        return damage;
    }

    this.getHowManyMonster = () => {
        return howManyMonstersAreHit;
    }
}

const createMonsterArray = number => {
    const monsterLine = [];
    for (let i = 0; i < number + 3; i++) {
        let monsterNumber = Math.floor(Math.random() * 3)
        switch (monsterNumber) {
            case 0: monsterLine.push(new Monster('dragao', 12, 'dano magico', 50));
                break;
            case 1: monsterLine.push(new Monster('mortos-vivos', 8, 'dano veneno', 50));
                break;
            case 2: monsterLine.push(new Monster('orcs', 6, 'dano fisico', 50));
                break;
        }
    }
    return monsterLine;
}

function getDificulty() {
    const dificulty = prompt("Qual a dificuldade que deseja? Facil, Intermediario, Dificil? ");
    return dificulty;
}

const createAdventurersArray = numberOfAdventurers => {
    const adventurers = [];
    let adventurous;
    let aux = 'guerreiros';
    let i;
    let adventurousInstance;
    for (i = 0; i < 3; i++) {
        adventurous = prompt(`Qual a quantidade de ${aux} que deseja? `);
        numberOfAdventurers -= adventurous;
        if (i === 0)
            adventurousInstance = new Adventurous(aux, 'dano fisico', 6, 2) 
        else if (i === 1)
            adventurousInstance = new Adventurous(aux, 'dano magico', 4, 4)
        else
            adventurousInstance = new Adventurous(aux, 'dano veneno', 5, 3) 
        if(numberOfAdventurers >= 0)
            adventurers.push({...adventurousInstance, quantity: adventurous});
        else {
            console.log("Você excedeu a quantidade máxima de aventureiros!");
            return false;
        }
        if(numberOfAdventurers === 0) break;
        if(i === 0) 
            aux = 'magos';
        else 
            aux = 'druidas';
    }
    for(i = i; i < 2; i ++) {
        adventurers.push(0);
    }
    if(numberOfAdventurers !== 0) {
        console.log("Você não atingiu a quantidade certa de aventureiros!");
        return false;
    }
    return adventurers
}

const deleteMonsterFromArray = (monsters, positionToRemove) => {
    const monstersBefore = monsters.slice(0, positionToRemove);
    const monstersAfter = monsters.slice(positionToRemove + 1, monsters.length);
    return monstersBefore.concat(monstersAfter)
}


module.exports = {
    Monster,
    Adventurous,
    createMonsterArray,
    createAdventurersArray,
    getDificulty,
    deleteMonsterFromArray
}