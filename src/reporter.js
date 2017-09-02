/**
 * Returns the robot positions of the specified state as a string, one line
 * per robot.
 * 
 * Example:
 * 2 3 N
 * 1 5 E LOST
 * 4 3 W
 */
exports.report = function (state) {
    return state.robots
        .map(robot => {
            const pos = robot.position;
            return `${pos.x} ${pos.y} ${pos.orientation}${pos.lost ? ' LOST' : ''}`;
        })
        .join('\n');
};
