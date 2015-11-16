//Name: Wesley Gill
//Estimated time: 2 hours
//Percent Completed: 100%

var computerChoice; //stores the computer choice(rock, paper, scissors, lizard, or spock)
var userChoice; //stores the users choice(rock, paper, scissors, lizard, or spock)
var result; //stores the winner(rock, paper, scissors, lizard, or spock) or if there is a tie it stores "tie"

//get the computers choice and the users choice
var getInput = function()
{
	userChoice = prompt("Do you choose rock, paper, scissors, lizard, or spock??");
	computerChoice = Math.random();
	
	while((userChoice != "rock") && (userChoice != "paper") && (userChoice != "scissors") && (userChoice != "lizard") && (userChoice != "spock"))
	{
		userChoice = prompt("That answer wasn't valid. Please enter another answer. Do you choose rock, paper, scissors, lizard, or spock?");
	}
	
	if (computerChoice <= 0.2) 
	{
		computerChoice = "rock";
	} 
	else if (computerChoice <= 0.4) 
	{
		computerChoice = "paper";
	} 
	else if (computerChoice <= 0.6) 
	{
		computerChoice = "scissors";
	} 
	else if (computerChoice <= 0.8) 
	{
		computerChoice = "lizard";
	} 
	else 
	{
		computerChoice = "spock";
	} 
	
	document.write("The computer chose: " + computerChoice + "</br>");
	console.log("Computer: " + computerChoice);
}

//compare computers choice to users choice and see who won
var compare = function(choice1, choice2) 
{
	if (choice1 === choice2)
	{
		return "tie"; 
	}
	else if (choice1 === "rock")
	{
		if (choice2 === "paper")
		{
			return "paper";   
		}
		else if (choice2 === "scissors")
		{
			return "rock";   
		}
		else if (choice2 === "lizard")
		{
			return "rock";
		}
		else if (choice2 === "spock")
		{
			return "spock";
		}
	} 
	else if (choice1 === "paper")
	{
		if (choice2 === "rock")
		{
			return "paper";   
		}
		else if (choice2 === "scissors")
		{
			return "scissors";   
		}
		else if (choice2 === "lizard")
		{
			return "lizard";
		}
		else if (choice2 === "spock")
		{
			return "paper";
		}
	}
	else if (choice1 === "scissors")
	{
		if (choice2 === "rock")
		{
			return "rock";   
		}
		else if (choice2 === "paper")
		{
			return "scissors";   
		}
		else if (choice2 === "lizard")
		{
			return "scissors";
		}
		else if (choice2 === "spock")
		{
			return "spock";
		}
	}
	else if (choice1 === "lizard")
	{
		if (choice2 === "rock")
		{
			return "rock";   
		}
		else if (choice2 === "paper")
		{
			return "lizard";   
		}
		else if (choice2 === "scissors")
		{
			return "scissors";
		}
		else if (choice2 === "spock")
		{
			return "lizard";
		}
	}
	else if (choice1 === "spock") 
	{
		if (choice2 === "rock")
		{
			return "spock";   
		}
		else if (choice2 === "paper")
		{
			return "paper";
		}
		else if (choice2 === "scissors")
		{
			return "spock";
		}
		else if (choice2 === "lizard")
		{
			return "lizard";
		}
	}
}

//start the game
do
{
	getInput();
	result = compare(userChoice, computerChoice);
	if (result === "tie") 
	{
		alert("The game was a tie. Lets play again!");
	}
} while (result === "tie"); //if there is a tie, play again

//tell the user if they won or lost
if (result === userChoice)
{
	document.write("You won!");
}
else if (result === computerChoice)
{
	document.write("The computer won!");
}
else
{
	document.write("There was an error. Please try again.");
}