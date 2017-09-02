const assert = require('assert');
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

const program = require('../src/index');

const samplePath = 'test/samples/';

describe('Samples', function () {
    const files = fs.readdirSync(samplePath);
    const inFiles = files.filter(name => name.endsWith('.in.txt'));

    for (const file of inFiles) {
        it(`should generate the correct output for ${file}`, async function () {
            const input = await readFile(samplePath + file, 'utf-8');
            const expectedOutput = await readFile(samplePath + file.replace('.in.txt', '.out.txt'), 'utf-8');

            const output = program.processString(input);

            assert.equal(output, expectedOutput.replace(/\r\n/g, '\n'));
        });
    }
});
