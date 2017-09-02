# Coding Challenge "Martian Robots"

*A Developer Programming Problem by Red Badger Consulting Limited*

## Usage

The tool does not require any dependencies except for executing the tests. It is usable from command line or programatically.

### Command line

The CLI expects the input from stdin. An empty newline indicates the end of the input.

Interactive example:

```
$ npm start
2 2
1 1 N
FRFRFF

```

Read from file:

```
$ node ./src/cli.js < ./test/samples/readme.in.txt
```

PowerShell does not support inut redirection with "<". Need to pipe instead:

```posh
$ Get-Content ./test/samples/readme.in.txt | node ./src/cli.js
```

### Programatically

```js
const martialRobots = require('./src/index');
const output = martialRobots.processString('2 2\n1 1 N\nFRFRFF');
console.log(output);
```

### Tests

Tests require mocha. So you need to `npm install` the dependencies.

To create a new test, just put files in *./test/samples* with the following format:

*   &lt;name&gt;.in.txt: This will serve as the input.
*   &lt;name&gt;.out.txt: The input will be validated against an output with the same file name.

Run the tests as usual with:

```
$ npm test
```

## Description

### The Problem 

The surface of Mars can be modelled by a rectangular grid around which robots are able to move according to instructions provided from Earth. You are to write a program that determines each sequence of robot positions and reports the final position of the robot.

A robot position consists of a grid coordinate (a pair of integers: x-coordinate followed by y-coordinate) and an orientation (N, S, E, W for north, south, east, and west). A robot instruction is a string of the letters "L", "R", and "F" which represent, respectively, the instructions:

*   Left: the robot turns left 90 degrees and remains on the current grid point.
*   Right: the robot turns right 90 degrees and remains on the current grid point.
*   Forward: the robot moves forward one grid point in the direction of the current orientation and maintains the same orientation.

The direction North corresponds to the direction from grid point (x, y) to grid point (x, y+1).

There is also a possibility that additional command types may be required in the future andprovision should be made for this.

Since the grid is rectangular and bounded (...yes Mars is a strange planet), a robot that moves "off" an edge of the grid is lost forever. However, lost robots leave a robot "scent" that prohibits future robots from dropping off the world at the same grid point. The scent is left at the last grid position the robot occupied before disappearing over the edge. An instruction to move "off" the world from a grid point from which a robot has been previously lost is simply ignored by the current robot.

### The Input

The first line of input is the upper-right coordinates of the rectangular world, the lower-left coordinates are assumed to be 0, 0.

The remaining input consists of a sequence of robot positions and instructions (two lines per robot). A position consists of two integers specifying the initial coordinates of the robot and an orientation (N, S, E, W), all separated by whitespace on one line. A robot instruction is a string of the letters "L", "R", and "F" on one line.

Each robot is processed sequentially, i.e., finishes executing the robot instructions before the next robot begins execution. 

The maximum value for any coordinate is 50.

All instruction strings will be less than 100 characters in length.

### The Output

For each robot position/instruction in the input, the output should indicate the final grid position and orientation of the robot. If a robot falls off the edge of the grid the word "LOST" should be printed after the position and orientation.

#### Sample Input

```
5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL
```

#### Sample Output

```
1 1 E
3 3 N LOST
2 3 S
```
