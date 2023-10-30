# My Choice of Game
Concentration

## Wireframe
![](./assets/Project%201%20Wireframe.png)

## Pseudocode
(Inspired by Josh's Demo)

### INIT
1. Press "Start"
2. Create board
3. Shuffle/randomize colors
4. Flip colors to show blank squares

### HTML
1. h1 - "Concentration"
2. 16 buttons to represent the squares/colors
3. "Start" button
4. "Reset" button

### CSS
1. Center "Concentration", "Start", and "Reset"
2. Organize all 16 squares evenly within one box (4x4)
3. Apply color styling to each square ... 8 colors in total
4. *Potentially* add a hover feature for each square

### JS
1. Shuffle the colors with each reset.
2. Add event listener to reveal the color of a square upon the user click
3. If second click reveals the same color as the first, keep both squares flipped on the board.
4. If second click does not match the first, display "Wrong" message and flip both squares so they are blank
5. Maintain this conditional throughout the course of the game
6. After a specified number of failed attemps, return "Game Over"

