const nextOrientations = {
    'N': 'E',
    'E': 'S',
    'S': 'W',
    'W': 'N'
};

/**
 * Turns the robot by 90° to the right. Returns it's new position with the
 * changed orientation.
 * 
 * @param {Object} position The robot's position with `x` and `y` coordinates
 *      and an `orientation`
 * @param {Object} area The area with `top`, `right`, `bottom` and `left`
 *      boundaries
 * @param {Array} robotScents Positions (with `x` and `y` coordinates) of robot
 *      scents
 */
module.exports = function (position, area, robotScents) {
    return {
        ...position,
        orientation: nextOrientations[position.orientation]
    };
};
