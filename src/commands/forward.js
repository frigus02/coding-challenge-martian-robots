/**
 * Returns true, if the specified position lies outside of the specified area.
 * 
 * @param {Object} area The area with `top`, `right`, `bottom` and `left`
 *      boundaries
 * @param {Object} position A position with `x` and `y` coordinates
 */
function isPositionOutsideArea(area, position) {
    return (
        position.x < area.left ||
        position.x > area.right ||
        position.y < area.bottom ||
        position.y > area.top
    );
}

/**
 * Returns true, if the `x` and `y` coordinates of the specified positions are
 * equal.
 * 
 * @param {Object} pos1 The first position
 * @param {Object} pos2 The second position
 */
function arePositionsEqual(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

/**
 * Returns a new position, which is moved by 1 in the direction specified by
 * the orientation:
 * - 'N': x, y + 1
 * - 'E': x + 1, y
 * - 'S': x, y - 1
 * - 'W': x - 1, y
 * 
 * @param {Object} position A position with `x` and `y` coordinates and an
 *      `orientation`
 */
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

/**
 * Moves the robot with the specified position by 1 in the direction specified
 * by its orientation.
 * 
 * If the robot moves outside of the specified area, return it's current
 * position and set the `lost` property to true.
 * 
 * If the robot moves outside of the specified area, but there is a robot scent
 * at his current position, the scent protects the robot. In this case the
 * original position is returned unchanged.
 * 
 * @param {Object} position The robot's position with `x` and `y` coordinates
 *      and an `orientation`
 * @param {Object} area The area with `top`, `right`, `bottom` and `left`
 *      boundaries
 * @param {Array} robotScents Positions (with `x` and `y` coordinates) of robot
 *      scents
 */
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
