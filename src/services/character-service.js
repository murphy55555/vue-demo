export class Character {
    constructor(name, characterClass, level, race) {
        this.name = name;
        this.characterClass = characterClass;
        this.level = level;
        this.race = race;
        this._AC = 0;
        this._DMG = 0;

        // Hard coded for all characters for simplicty
        this.abilities = [
            { type: "Strength", score: 18 },
            { type: "Dexterity", score: 5 },
            { type: "Constitution", score: 14 },
            { type: "Intelligence", score: 9 },
            { type: "Wisdom", score: 10 },
            { type: "Charisma", score: 20 }
        ];
        this._weapon = { name: "Battle Axe", baseDMG: 10 };
        this._armor = { name: "Plate", baseAC: 15 };
        this.calculateDMG();
        this.calculateAC();
    }

    get Weapon(){
        return this._weapon;
    }

    set Weapon(weapon){
        this._weapon = weapon;
        this.calculateDMG();
    }

    get Armor(){
        return this._armor;
    }
    
    set Armor(armor){
        this._armor = armor;
        this.calculateAC();
    }

    calculateDMG() {
        if (this._weapon) {
            this._DMG = this._weapon.baseDMG + CharacterService.getAbilityBonus(this.abilities.find(a => a.type === "Strength").score);
        } else {
            this._DMG = 0;
        }
    }

    get DMG(){
        return this._DMG;
    }

    calculateAC() {
        if (this._armor) {
            this._AC = this._armor.baseAC + CharacterService.getAbilityBonus(this.abilities.find(a => a.type === "Dexterity").score);
        } else {
            this._AC = 0;
        }
    }

    get AC(){
        return this._AC;
    }
}

export class CharacterService {
    constructor() { }

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

    static getCharacter(characterName) {
        return CharacterService.getCharacters()
            .filter(c => c.name.toLowerCase() === characterName.toLowerCase())[0];
    }

    static getArmorTypes() {
        return [{ name: "Plate", baseAC: 15 }, { name: "Leather", baseAC: 10 }, { name: "Cloth", baseAC: 5 }];
    }

    static getWeapons() {
        return [{ name: "Battle Axe", baseDMG: 10 }, { name: "Short Sword", baseDMG: 4 }, { name: "Morning Star", baseDMG: 6 }];
    }

    static getAbilityBonus(score) {
        if (score <= 5) {
            return -1;
        } else if (score > 5 && score <= 10) {
            return 0;
        } else if (score > 10 && score <= 15) {
            return 1;
        } else {
            return 2;
        }
    }
}