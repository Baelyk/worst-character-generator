/*
# main.js

Main file for the Worst character generator
*/

function randInt (min, max, inclusive = false) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + (inclusive ? 1 : 0))) + min
}

function rollDie (die, amount = 1) {
    let dice = 0
    if (die == 10) {
        for(let i = 0; i < amount; i++) {
            dice += randInt(0, 9, true) // x | 0<=x<=9 and x is int
        }
    } else {
        for(let i = 0; i < amount; i++) {
            dice += randInt(1, die, true) // x | 1<=x<=die and x is int
        }
    }
    return dice
}

class Character {
    constructor(name, race, body, mind, spirit, age, movement) {
        this.name = name
        this.race = race
        this.bodyBase = body
        this.mindBase = mind
        this.spiritBase = spirit
        this.raceBase = this.bodyBase + this.mindBase + this.spiritBase
        this.age = age.minimum + rollDie(age.modifier)
        this.movement = movement
        this.climbspeed = this.movement / 2

        this.body = this.bodyBase + rollDie(6, this.bodyBase)
        this.mind = this.mindBase + rollDie(6, this.mindBase)
        this.spirit = this.spiritBase + rollDie(6, this.spiritBase)
        this.weavePoints = this.body + this.mind + this.spirit

        this.bodyMod = Math.floor(this.body / 10)
        this.mindMod = Math.floor(this.mind / 10)
        this.spiritMod = Math.floor(this.spirit / 10)
        this.weavePointsMod = Math.floor(this.weavePoints / 10)

        this.bms = Math.floor((this.bodyMod + this.mindMod + this.spiritMod) / 10)
        this.attack = this.grabDefense = this.bodyMod + this.spiritMod
        this.armor = this.climb = this.bodyMod + this.mindMod + this.spiritMod
        this.luck = this.untrap = this.initiative = this.mindMod + this.spiritMod
        this.sneak = this.spiritMod
        this.skill = this.luck
    }
}

function createCharacter (name, race, humanBonus) {
    // new Character(name, race, body, mind, spirit, age, movement)
    race = race.toLowerCase() // It shouldn't be an issue, but this way we don't have to deal with "HuMaN" vs "Human" vs "human"
    if(race == "human") {
        if(humanBonus == "body") { // humans can apply a +2 bonus to b, m, or s
            return new Character(name, race, 8, 6, 6, {
                minimum: 12,
                modifier: 8
            }, 30)
        } else if(humanBonus == "mind") {
            return new Character(name, race, 6, 8, 6, {
                minimum: 12,
                modifier: 8
            }, 30)
        } else if(humanBonus == "spirit") {
            return new Character(name, race, 6, 6, 8, {
                minimum: 12,
                modifier: 8
            }, 30)
        } else {
            throw new Error ("race is human but humanBonus is not one of the options")
        }
    } else if(race == "elf") {
        return new Character(name, race, 6, 5, 9, {
            minimum: 100,
            modifier: 100
        }, 40)
    } else if(race == "dwarf") {
        return new Character(name, race, 8, 8, 4, {
            minimum: 50,
            modifier: 20
        }, 30)
    } else if(race == "wizard") {
        return new Character(name, race, 6, 8, 8, {
            minimum: 25,
            modifier: 100
        }, 30)
    } else if(race == "halfling") {
        return new Character(name, race, 4, 6, 6, {
            minimum: 35,
            modifier: 12
        }, 30)
    } else if(race == "lizard") {
        return new Character(name, race, 9, 5, 6, {
            minimum: 20,
            modifier: 4
        }, 30)
    } else if(race == "orc") {
        return new Character(name, race, 10, 4, 6, {
            minimum: 20,
            modifier: 19
        }, 39)
    } else {
        throw new Error ("race is not one of the options")
    }
}
