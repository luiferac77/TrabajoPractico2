import path, { extname } from 'path';

const filePath = './data/exampe.txt';
const dirName = path.dirname(filePath);

console.log('Directorio base:',dirName);

const baseName = path.basename(filePath,'.txt');
console.log('Nombre del archivo:',baseName);

const extName = path.extname(filePath);
console.log('Extensión del archivo:',extName);

const newPath = path.join('/user', 'docs', 'newfile.txt');
console.log('Nueva ruta:', newPath);