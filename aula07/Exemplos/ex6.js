// Permitindo que o usuario digite algo
let readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite algo:', (answer) => {
    console.log(`Você digitou: ${answer}`);
    rl.close();
});
