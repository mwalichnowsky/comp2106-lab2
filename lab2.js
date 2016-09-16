// User Input.
var userChoice = prompt ("Welcome to rock, paper, scissors. To play, please enter either: rock, paper or scissors");

// Computer Randomly Generated Input.
var computerChoice = Math.random();

// Determine Computer Choice as a String.
if (computerChoice <= 0.33) 
{
    computerChoice = "rock";
}

if (computerChoice < 0.67 && computerChoice > 0.33) 
{
    computerChoice = "paper";
}

else
{
    computerChoice = "scissors";
}

// Compare results.
var compare = function (userChoice, computerChoice)
{
    if (userChoice === computerChoice) 
    {
        return "It's a tie!";
    }

    if (userChoice === "rock") 
    {
        if (computerChoice === "scissors") 
        {
            return "Rock wins!";
        } 
        else if (computerChoice === "paper")
        {
            return "Paper wins!";
        }
    }

    if (userChoice === "paper") 
    {
        if (computerChoice === "rock") 
        {
            return "Paper wins!";
        } 
        else if (computerChoice === "scissors")
        {
            return "Scissors wins!";
        }
    }

    else if (userChoice === "scissors") 
    {
        if (computerChoice === "rock") 
        {
            return "Rock wins!";
        }
        else if (computerChoice === "paper")
        {
            return "Scissors wins!";
        }
    }
}