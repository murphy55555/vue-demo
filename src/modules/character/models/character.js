export class Character {
    constructor(name, characterClass, level, race) {
        this.name = name;
        this.characterClass = characterClass;
        this.level = level;
        this.race = race;

        // Hard coded for all characters for simplicty
        this.abilities = [
            { type: "Strength", score: getRandomStatValue() },
            { type: "Dexterity", score: getRandomStatValue() },
            { type: "Constitution", score: getRandomStatValue() },
            { type: "Intelligence", score: getRandomStatValue() },
            { type: "Wisdom", score: getRandomStatValue() },
            { type: "Charisma", score: getRandomStatValue() }
        ];
        this.weapon = { name: "Battle Axe", baseDMG: 10 };
        this.armor = { name: "Plate", baseAC: 15 };
    }
}

function getRandomStatValue() {
    return Math.ceil(Math.random() * 20);
}