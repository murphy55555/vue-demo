export class Character {
    constructor(name, characterClass, level, race) {
        this.name = name;
        this.characterClass = characterClass;
        this.level = level;
        this.race = race;
    }
}

export class CharacterService {
    constructor() {
    }

    static getCharacters() {
        let characters = [];
        characters.push(
            new Character("Juniper", "Druid", 1, "Human"));
        characters.push(
            new Character("Hasak", "Fighter", 15, "Barbarian"));
        characters.push(
            new Character("Loon", "Wizard", 5, "High Elf"));
        characters.push(
            new Character("Jasper", "Thief", 10, "Drow"));
        characters.push(
            new Character("Centiuma", "Fighter", 2, "Draconian"));

        return characters;
    }
}