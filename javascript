from Codecademy
// Check if the user is ready to play!
confirm("Are you ready to play?")

var age = prompt("What is your age? Must be under 13 to play")

if (age < 13)
{
    console.log( "You are allowed to play")
}
else
{
    console.log("You are not allowed to play")
}

console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'")

console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'")

var userAnswer = prompt("Do you want to race Bieber on stage?")

if (userAnswer === "yes")
{
    console.log("You and Bieber start racing.  It's neck and neck! You win by a shoelace!")
}
else
{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")
}

var feedback = prompt("Please rate my game")

if (feedback > 8)
{
    console.log("Thank you! We should race at the next concert!")
}
else
{
    console.log("I'll keep practicing coding and racing.")
}

Giving a prompt a value and performing math with it

/ This is what a function looks like:
var number = prompt("Give me a number")
var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!

divideByThree(number);

Functions and variables
var sleepCheck = function (numHours) {
    if (numHours >= 8)
    {
        return "You're getting plenty of sleep! Maybe even too much!";
    }
    else
    {
        return "Get some more shut eye!";
    }
};
sleepCheck(10);
sleepCheck(5);
sleepCheck(8);


//for loops
// this counts down from 100 to 0 by 5 but doesnt include 0
for (i=100; i>0; i-=5) {
    console.log(i);
}
