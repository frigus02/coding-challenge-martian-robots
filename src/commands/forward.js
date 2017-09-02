function isPositionOutsideArea(area, position) {
    return (
        position.x < area.left ||
        position.x > area.right ||
        position.y < area.bottom ||
        position.y > area.top
    );
}

function arePositionsEqual(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

function move(position) {
    switch (position.orientation) {
        case 'N':
            return { ...position, y: position.y + 1 };
        case 'E':
            return { ...position, x: position.x + 1 };
        case 'S':
            return { ...position, y: position.y - 1 };
        case 'W':
            return { ...position, x: position.x - 1 };
        default:
            return position;
    }
}

module.exports = function (position, area, robotScents) {
    const newPosition = move(position);
    if (isPositionOutsideArea(area, newPosition)) {
        const protectedByScent = robotScents.some(scent => arePositionsEqual(position, scent));
        if (protectedByScent) {
            return position;
        } else {
            return {
                ...position,
                lost: true
            };
        }
    } else {
        return newPosition;
    }
};
