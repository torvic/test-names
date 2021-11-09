const faker = require('faker')
const fs = require('fs')

let randomNames = ''
for (let i=0; i<1000; i++ ) {
	randomNames += `${faker.name.findName()}\n`
}
fs.writeFile('names.txt', randomNames, (err) => {
	if (err) {
		console.log('Uups error: ', err);
	} else {
		console.log( 'File written successfully');
	}
})