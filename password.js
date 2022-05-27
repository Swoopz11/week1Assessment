const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log('Welcome to the password validator!')
reader.question("Enter password for validation: ", function(input){
	const password = input;
	
	if (password.length >= 10) {
        console.log('Password validated!') 
        console.log(' | |')
        console.log('(___)')
    } else if (password.length === 0) {
        console.log('No password to validate')
        console.log('0 0')
        console.log('-U-')
    } else if (password.length < 10) {
        console.log('Password is not long enough')
        console.log(' U U')
        console.log('(---)')
    }

    reader.close()

});
