
export let name: string = 'Gabriel';
export const age: number = 35;
export const isValid: boolean = true;

name = 'Melissa';

export const templateString = `Esto es un string
multilinea
que puede tener
" dobles
' simple
inyectar valores ${name}
\$1.000,00
expresiones ${1 + 1}`;

console.log(templateString);
