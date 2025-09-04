import axios from 'axios';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';


export class Pokemon {

    //? 1era forma
    // public id: number;
    // public name: string;

    // constructor(id: number,name: string) {
    //     this.id = id;
    //     this.name = name;
    // }

    //* getters
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    //* methods note: by default everything is public = public scream() = scream()
    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak() {
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]> {
        // const moves = 10;
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves[0].move.name.toUpperCase() );
        
        return data.moves;
    }
    
    //? 2da forma (abreviada)
    constructor(
        public readonly id: number, 
        public name: string,
        // public imageUrl: string,
    ) {}

}

export const charmander = new Pokemon(4, 'Charmander');


// console.log(charmander.imageUrl);


// charmander.speak();
// charmander.scream();


charmander.getMoves();
// console.log( charmander.getMoves().then(resp => console.log(resp) ) );
