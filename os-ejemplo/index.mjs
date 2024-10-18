import os from 'os';

console.log('Arquitectura', os.arch());
console.log('Plataforma', os.platform());
console.log('Cantidad total de memoria', os.totalmem());
console.log('Memoria libre', os.freemem());
console.log('Información de la cpu', os.cpus());