const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft === 0) {
        completionCallback(sum);
        reader.close();
    }
    
    if (numsLeft > 0){
        reader.question("Give me a number: ", function (response){
            const number = parseInt(response);
            sum += number;
            console.log("Right now, the sum is: " + sum);

            numsLeft -= 1;
            addNumbers(sum, numsLeft, completionCallback);
        })

    }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));