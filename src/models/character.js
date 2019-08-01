export class Character {
    constructor(name, characterClass, level, race) {
        this.name = name;
        this.characterClass = characterClass;
        this.level = level;
        this.race = race;

        // Hard coded for all characters for simplicty
        this.abilities = [
            { type: "Strength", score: 18 },
            { type: "Dexterity", score: 5 },
            { type: "Constitution", score: 14 },
            { type: "Intelligence", score: 9 },
            { type: "Wisdom", score: 10 },
            { type: "Charisma", score: 20 }
        ];
        this.weapon = { name: "Battle Axe", baseDMG: 10 };
        this.armor = { name: "Plate", baseAC: 15 };
    }
}