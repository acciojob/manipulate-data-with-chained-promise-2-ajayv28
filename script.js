//your JS code here. If required.
function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]); // Resolving with the array after 3 seconds
        }, 3000);
    });
}

function filterEvenNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evens = numbers.filter(num => num % 2 === 0);
            document.getElementById("output").innerText = evens.join(', '); // Display even numbers
            resolve(evens);
        }, 1000); // 1 second delay
    });
}

function multiplyNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multiplied = numbers.map(num => num * 2);
            document.getElementById("output").innerText = multiplied.join(', '); // Display multiplied numbers
            resolve(multiplied);
        }, 2000); // 2 seconds delay
    });
}

// Chaining the promises
getNumbers()
    .then(filterEvenNumbers)
    .then(multiplyNumbers)
    .catch((error) => {
        console.error("An error occurred:", error);
    });
