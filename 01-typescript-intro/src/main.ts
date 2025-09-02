import './style.css'
// import { name } from './bases/01-types';
import { bulbasaur } from './bases/02-objects';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
        <h1>Vite + TypeScript</h1>
        <h2>Hello ${bulbasaur.name}</h2>
    </div>
`

