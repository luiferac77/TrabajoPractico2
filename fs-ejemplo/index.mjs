import { error } from 'console';
import fs from 'fs';

//const ruta = './example.txt'
fs.readFile('./data/example.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log('Contenido del ahivo:', data);
});

//const newfile = './newfile.txt';
fs.writeFile('./data/newfile.txt', 'Contenido nuevo', (err) => {
    if(err) throw err;
    console.log('Archivo creado y escrito');
});