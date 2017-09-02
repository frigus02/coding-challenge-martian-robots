function parseCoordinates(line) {
    const coordindates = line.trim()
        .split(' ')
        .map(number => parseInt(number, 10));

    return {
        x: coordindates[0],
        y: coordindates[1]
    };
}

function parseRobotPosition(line) {
    const parts = line.trim().split(' ');

    return {
        x: parseInt(parts[0], 10),
        y: parseInt(parts[1], 10),
        orientation: parts[2]
    };
}

function parseRobotInstructions(line) {
    return line.trim().split('');
}

exports.parse = function (input) {
    const lines = input.split('\n');
    
    const upperRight = parseCoordinates(lines[0]);
    const area = {
        top: upperRight.y,
        right: upperRight.x,
        bottom: 0,
        left: 0
    };

    const robots = [];
    for (let i = 1; i < lines.length; i += 2) {
        robots.push({
            position: parseRobotPosition(lines[i]),
            instructions: parseRobotInstructions(lines[i + 1])
        });
    }

    return {
        area,
        robots
    };
};
