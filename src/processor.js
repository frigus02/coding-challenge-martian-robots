const commands = {
    'L': require('./commands/left'),
    'R': require('./commands/right'),
    'F': require('./commands/forward')
};

/**
 * Processes the instructions for each robot one by one. Robots are processed
 * one after another.
 * 
 * If a robot is lost after an instructions, it's scent is collected and the
 * remaining instructions are ignored.
 * 
 * Returns the modified state after all robots have been processed.
 */
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
