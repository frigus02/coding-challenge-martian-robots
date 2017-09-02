const readline = require('readline');

const program = require('./index');


const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
const lines = [];

reader.on('line', function (line) {
    line = line.trim();
    if (line) {
        lines.push(line);
    } else {
        reader.close();
    }
});

reader.on('close', function (line) {
    const output = program.processString(lines.join('\n'));
    console.log(output);
});
