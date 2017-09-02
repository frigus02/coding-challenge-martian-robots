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

/**
 * Parses the specified input string.
 * 
 * The first line are space separated upper-right coordinates of the area.
 * 
 * This is followed by 2 lines per robot. The first robot line are space
 * separated coordindates of its start position and its orientation. The
 * second robot line are the instructions.
 * 
 * Example:
 * 5 3
 * 1 1 N
 * FFRRFLRLF
 * 2 2 E
 * RRRFF
 * 
 * Returns the parsed input in the format:
 * {
 *     area: { top: 3, right: 5, bottom: 0, left: 0 },
 *     robots: [
 *         {
 *             position: { x: 1, y: 1, orientation: 'N' },
 *             instructions: ['F', 'R', ...]
 *         },
 *         ...
 *     ]
 * }
 */
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
