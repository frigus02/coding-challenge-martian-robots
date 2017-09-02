const commands = {
    'L': require('./commands/left'),
    'R': require('./commands/right'),
    'F': require('./commands/forward')
};

exports.process = function (state) {
    state.robotScents = [];

    for (const robot of state.robots) {
        for (const instruction of robot.instructions) {
            const command = commands[instruction];
            
            robot.position = command(robot.position, state.area, state.robotScents);
            if (robot.position.lost) {
                state.robotScents.push(robot.position);
                break;
            }
        }
    }

    return state;
};
