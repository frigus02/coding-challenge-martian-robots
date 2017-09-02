const parser = require('./parser');
const processor = require('./processor');
const reporter = require('./reporter');

exports.processString = function (input) {
    let state = parser.parse(input);
    state = processor.process(state);
    return reporter.report(state);
};
