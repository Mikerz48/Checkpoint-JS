let data = [8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90, 23 , 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77];

function sumCheck (data) {
    for (numbers in data) {
        if (data.reduce() %2 === 0) {
            console.log("La somma è pari");
        } else {
            console.log("La somma è dispari");
        }
    }
}

class Pokemon {
    constructor(name, baseExperience, abilities, forms, gameIndices, height, heldItems, id, isDefault, locationAreaEncounters, moves, order, pastTypes,species, sprites, stats, types, weight) {
        this.name = name;
        this.baseExperience = baseExperience;
        this.abilities = abilities;
    }
    logInformazioniPrincipali() {
        console.log('Name: ${this.name}');
        console.log('Base Experience: ${this.baseExperience}')
        console.log('Abilities: ${this.abilities}');
    }
}

fetch("https://pokeapi.co/api/v2/pokemon/charizard/")
.then((res) => res.json)
.then((data) =>)

    