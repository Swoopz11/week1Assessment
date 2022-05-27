const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log('Welcome to the password validator!')
reader.question("Enter password for validation: ", function(input){
	const tokens = input;
	
	if (tokens.length >= 10) {
        console.log('Password validated!')
    } else {
        console.log('Password is not long enough')
    }

    reader.close()

});
