function isPositionOutsideArea(area, position) {
    return (
        position.x < area.left ||
        position.x > area.right ||
        position.y < area.bottom ||
        position.y > area.top
    );
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
        return {
            ...position,
            lost: true
        };
    } else {
        return newPosition;
    }
};
