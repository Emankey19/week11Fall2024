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
    status() {
        return `
                NAME: ${this.name} 
                HEALTH: ${this.health} 
                STR:${this.attrList[0].value}
                DEX:${this.attrList[1].value}
        `;
    }
    attack(who) {
        const myStr = this.attrList[0].value;
        const myDex = this.attrList[1].value;
        const theirDex = who.attrList[1].value;
        const chanceOfSuccess = (50 + (myDex - theirDex)) / 100;
        if (Math.random() >= chanceOfSuccess) {
            const damage = Math.ceil(myStr * Math.random());
            who.health -= damage;
            return this.name + " hit " + who.name + " for " + damage + " points.";
        }
        return this.name + " missed " + who.name + " doing no damage.";
    }
}
class FightingGame {
    constructor() {
        this.fighters = [
            new Fighter("hero"),   // 0
            new Fighter("villian") // 1
        ];
    }
    status() {
        return this.fighters.map(f => f.status()).join("\n-----")
    }
    fight(a, b) {
        const output = [];
        let victor = {};
        output.push("FIGHT " + a.name + " vs " + b.name);
        victor = new Fighter("no one");
        //TODO fight while both are alive
        while (a.health > 0 && b.health > 0) {
            output.push(a.attack(b));
            output.push(b.attack(a));
        }
        if (a.health > 0) {
            victor = a;
        }
        if (b.health > 0) {
            victor = b;
        }
        output.push("FINISH " + victor.name + " WINS!!!");
        return output.join("\n");
    }
}
fg = new FightingGame();
console.log(fg.status());
console.log(fg.fight(fg.fighters[0], fg.fighters[1]));
console.log(fg.status());

