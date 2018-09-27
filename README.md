# Fatal-Start - Proposal 

## Background
Fatal-Start is a variation of the classic Metal Slugs game. The goal of Fatal-Start is to make it through to levels consisting of
enemies and bosses. 


## MVP
* Be able to shoot and destroy enemies/bosses
* Select the angle to attack 
* Select difficulty 


## Wireframes
This app will consist of a single screen with a header that consists of my name email, game name, and nav links to the 
to the Github, my LinkedIn, and personal website. It will have a modal about the game instructions. Game controls will include W,S,A,D to move and J, S, K to attack.

## Architecture and Technologies
* JavaScript for the game logic,
* canvas

`characters.js`: will handle the logic of creating enemies and creating characters

`moving_object.js`: will handle the logic of all moving objects including characters, bullets, bombs, etc.
`fatal_start.js`: will handle the logic of attackers, collisions, and the overall game logic

## Implementation Timeline
`Day 1`: Setup all necessary modules and webpack. Write the basics of moving_objects and fatal_start. 

`Day 2`: Implementation of rendering characters and moving_objects onto canvas. Start the basics of collision, 
attack and hit point relationships.

`Day 3`: Continue working on collision and implement rules and logic of game flow. 

`Day 4`: Finalize on how the game flows, fixing up minute details. Styling of frontend.


