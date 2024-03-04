/* Pseudocode 
1. Create an index.html file and main.js file in the blcok07 coursework folder.
2. Open index.html in browser and link the main.js file to the index.html file.
3. Assign three variables corresponding to three different arithmetic operators: +, -, * using const and naming each variable.
4. Set each of those variables equal to either 10, 40, or 39 respectively. 
5. Create a string by using the alert message that says You have received this 
message because you have been chosen to open an important vault. Here is the secret 
combination:
6. Add comments to explain each step in the process.
*/

//Set the variables to equal the vault code values

const addition = 4 + 6;
console.log(addition);

const difference = 50 - 10;
console.log(difference);

const product = 13 * 3;
console.log(product);

//Create an alert to the user with the message and the vault code numbers

alert(`You have received this message because you have been chosen to open an important vault. Here is the secret combination: ${addition} ${difference} ${product}`);