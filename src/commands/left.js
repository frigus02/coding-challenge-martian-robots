const nextOrientations = {
    'N': 'W',
    'W': 'S',
    'S': 'E',
    'E': 'N'
};

module.exports = function (position, area, robotScents) {
    return {
        ...position,
        orientation: nextOrientations[position.orientation]
    };
};
