function greetings() {
	// DO NOT CHANGE
	// взимаме въведената от потребителя стойност за град:
	var userTown = document.getElementById("town").value;
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
	// Task 1: Изпишете в конзолата съдържанието на променливата userTown
console.log(userTown)
	
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
	// Task 2:
	// ако потребителят е избрал 'София', то да се изпише в конзолата:
	// "Здравей!"
	// ако потребителят е избрал 'Париж', то да се изпише в конзолата:
	// "Salut!"
	// ако потребителят е избрал 'Лондон', то да се изпише в конзолата:
	// "Hi!"
	// --> YOUR CODE STARTS HERE <--
	
	switch (userTown){
		case 'София':
			console.log("Здравей!");
		break;
		case 'Париж':
			console.log("Salut!");
			break;
		case 'Лондон':
			console.log("Hi!");
			break;
		default:
			console.log("Choose corectly!");
	}
	
	// --> YOUR CODE ENDS HERE <--

	// DO NOT CHANGE
	// внимавайте, да не изтриете затварящата '}' фигурна скоба по-долу :)
}
