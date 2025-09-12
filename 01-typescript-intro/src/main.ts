// import { charmander } from './bases/03-classes'
// import { charmander } from './bases/04-injection'
// import { charmander } from './bases/05-decorators'
import { charmander } from './bases/06-decorators'
import './style.css'
// import { name } from './bases/01-types';
// import { pokemons } from './bases/02-objects';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
        <h1>Vite + TypeScript</h1>
        <h2>Hello ${charmander.name}</h2>
    </div>
`
