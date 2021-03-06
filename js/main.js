//created by: Wesley Gill

var computerChoice; //stores the computer choice(rock, paper, scissors, lizard, or spock)
var userChoice; //stores the users choice(rock, paper, scissors, lizard, or spock)
var result; //stores the winner(rock, paper, scissors, lizard, or spock) or if there is a tie it stores "tie"
var allResults = document.getElementById("results"); //stores the results that the user sees

//get the users choice and the computers choice
var getInput = function()
{
	//get user input
	userChoice = document.getElementById("userChoice").value;
	userChoice = userChoice.toLowerCase();
	
	//if the user entered a valid answer, calculate computer choice
	if((userChoice == "rock") || (userChoice == "paper") || (userChoice == "scissors") || (userChoice == "lizard") || (userChoice == "spock"))
	{
		computerChoice = Math.random();
	
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
	}
	else
	{
		result = "bad input";
	}
}

//compare computers choice to users choice and see who won
var compare = function() 
{
	if (userChoice == computerChoice)
	{
		return "tie"; 
	}
	else if (userChoice == "rock")
	{
		if (computerChoice == "paper")
		{
			return "paper";   
		}
		else if (computerChoice == "scissors")
		{
			return "rock";   
		}
		else if (computerChoice == "lizard")
		{
			return "rock";
		}
		else if (computerChoice == "spock")
		{
			return "spock";
		}
	} 
	else if (userChoice == "paper")
	{
		if (computerChoice == "rock")
		{
			return "paper";   
		}
		else if (computerChoice == "scissors")
		{
			return "scissors";   
		}
		else if (computerChoice == "lizard")
		{
			return "lizard";
		}
		else if (computerChoice == "spock")
		{
			return "paper";
		}
	}
	else if (userChoice == "scissors")
	{
		if (computerChoice == "rock")
		{
			return "rock";   
		}
		else if (computerChoice == "paper")
		{
			return "scissors";   
		}
		else if (computerChoice == "lizard")
		{
			return "scissors";
		}
		else if (computerChoice == "spock")
		{
			return "spock";
		}
	}
	else if (userChoice == "lizard")
	{
		if (computerChoice == "rock")
		{
			return "rock";   
		}
		else if (computerChoice == "paper")
		{
			return "lizard";   
		}
		else if (computerChoice == "scissors")
		{
			return "scissors";
		}
		else if (computerChoice == "spock")
		{
			return "lizard";
		}
	}
	else if (userChoice == "spock") 
	{
		if (computerChoice == "rock")
		{
			return "spock";   
		}
		else if (computerChoice == "paper")
		{
			return "paper";
		}
		else if (computerChoice == "scissors")
		{
			return "spock";
		}
		else if (computerChoice == "lizard")
		{
			return "lizard";
		}
	}
}

//writes the results to the paragraph tag with the id of results
var printResults = function()
{
	//if the user didn't enter a valid answer
	if (result == "bad input")
	{
		allResults.innerHTML += "Please enter a valid answer and try again." + "</br></br>";
	}
	
	//if the user did enter a valid answer
	else
	{
		allResults.innerHTML += "The computer chose: " + computerChoice + "</br>";
		
		if (result == "tie") 
		{
			allResults.innerHTML += "The game was a tie. Lets play again!";
		}
		else if (result == userChoice)
		{
			allResults.innerHTML += "You won!" + "</br></br>";
		}
		else if (result == computerChoice)
		{
			allResults.innerHTML += "The computer won!" + "</br></br>";
		}
		else
		{
			allResults.innerHTML += "There was an error. Please try again" + "</br></br>";
		}
	}
}

//start the game
var startGame = function() 
{
	//get input
	getInput();
	
	//if the user input is valid, see who won
	if (result != "bad input")
	{
		result = compare();
		console.log("comparing results");
	}
	
	//show the results to the user
	printResults();
}