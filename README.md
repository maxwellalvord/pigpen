# PigPen
By Maxwell Alvord

A simple html page to let a player play pig dice against another player or the computer.

## technologies Used

* HTML
* CSS
* Bootstrap
* JQuery
* MarkDown

## Description

This page will allow the user to decide if they want to play against a person or a computer. Following the decision on who your opponent will be you then decide if you want to roll two dice or one by click either button. When playing against the computer you can manually "hold" to tell the computer it is their turn. After the computers' roll is shown click the judge to see who won!

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Open portfolio folder.
* Open index.html

### Alternative Setup
* Visit the [gh-pages](https://maxwellalvord.github.io/pigpen/)

## Known Bugs
* Trying to play multiple games without pressing new game button in-between will cause a bug in the logic. Currently no system in place to validate that a new game button has been clicked.
* Alternating between rolling 1 and 2 dice without clicking new game will cause logic to bug and display incorrect operations.
* Playing against the computer is currently available for 1 dice only, using two dice will display incorrect operations.


## License
[MIT](https://opensource.org/licenses/MIT)

Copyright &copy;
2022 Maxwell Alvord

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Manual Testing
```Describe: getRandomInt()

Test: "it should output a number between 1-6"
Code: 
const player1 = dice roll
Expected Outcome: integer between 1-6

Describe: decider(player1Sum, player2Sum)

Test: 'If player1 sum is greater than player2Sum, then return 'Player 1 wins", else return "Player 2 wins"'
Code: 
decider(5,3)
Expected Outcome: 'Player 1 wins!"