import { Character } from '../models/character'

function getInitialCharacters() {
    return [
        new Character("Juniper", "Druid", 1, "Human"),
        new Character("Hasak", "Fighter", 15, "Barbarian"),
        new Character("Loon", "Wizard", 5, "High Elf"),
        new Character("Jasper", "Thief", 10, "Drow"),
        new Character("Centiuma", "Fighter", 2, "Draconian")
    ]
}

export function getCharacters() {
    let storedCharactersString = localStorage.getItem('characters');
    if (!storedCharactersString) {
        const characters = getInitialCharacters();
        localStorage.setItem('characters', JSON.stringify(characters));
        return characters;
    } else {
        return JSON.parse(storedCharactersString);
    }
}

export function createCharacter(character){
    let characters = JSON.parse(localStorage.getItem('characters'));
    characters.push(character);
    localStorage.setItem('characters', JSON.stringify(characters));
}

export function getCharacter(characterName) {
    return getCharacters()
        .find(c => c.name.toLowerCase() === characterName.toLowerCase());
}

export function getArmorTypes() {
    return [{ name: "Plate", baseAC: 15 }, { name: "Leather", baseAC: 10 }, { name: "Cloth", baseAC: 5 }];
}

export function getWeapons() {
    return [{ name: "Battle Axe", baseDMG: 10 }, { name: "Short Sword", baseDMG: 4 }, { name: "Morning Star", baseDMG: 6 }];
}

export function getRaces() {
    return ["Human","Barbarian","High Elf","Drow","Draconian"];
}

export function getClasses() {
    return ["Druid","Fighter","Wizard","Thief"];
}

export function getAbilityBonus(score) {
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

export function getDMG(weapon, abilities) {
    if (weapon) {
        return weapon.baseDMG + getAbilityBonus(abilities.find(a => a.type === "Strength").score);
    } else {
        return 0;
    }
}

export function getAC(armor, abilities) {
    if (armor) {
        return armor.baseAC + getAbilityBonus(abilities.find(a => a.type === "Dexterity").score);
    } else {
        return 0;
    }
}
