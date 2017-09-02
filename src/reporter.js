exports.report = function (state) {
    return state.robots
        .map(robot => {
            const pos = robot.position;
            return `${pos.x} ${pos.y} ${pos.orientation}${pos.lost ? ' LOST' : ''}`;
        })
        .join('\n');
};
