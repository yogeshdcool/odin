// FizzBuzz
// get input as a number
// loop from 1 - number 
// if number%3=Fizz
// if number%5=Buzz
// if number%3&&number&5=FizzBuzz
// n=parseInt(prompt("Enter a number"))
n = 15;
for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}