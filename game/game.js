//GAME
/* DESC:
A fighting game with at least two fighters who can have a blow by blow fight,
 when the encounter eachother. Each blow will reduce the health, 
 by up to their strength attribute if the hit hits.
They hit only when their dexterity attribute, 
is used as a percentage chance of success. (what are the odds)
 */
//NOUNS: PEOPLE, PLACES, and THINGS
class Attr {
    constructor(name, value = 50) {
        this.name = name;
        this.value = value;
    }
}
class Fighter {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.attrList = [
            new Attr("strength"),
            new Attr("dexterity"),
        ];
    }
    status(){
        return `
                NAME: ${this.name} 
                HEALTH: ${this.health} 
                STR:${this.attrList[0].value}
                DEX:${this.attrList[1].value}
        `;
    }
}
class FightingGame {
    constructor() {
        this.fighters = [
            new Fighter("hero"),   // 0
            new Fighter("villian") // 1
        ];
    }
    status(){
        return this.fighters
    }
}
fg = FightingGame();
console.log(fg.status());

