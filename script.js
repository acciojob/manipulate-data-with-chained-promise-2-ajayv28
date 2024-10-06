function manipulateData() {
    return new Promise((resolve) => {
        // Resolve with the initial array after 3 seconds
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

manipulateData()
    .then(array => {
        // Filter out odd numbers and log the result after 1 second
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = array.filter(num => num % 2 === 0);
                document.getElementById('output').textContent = evenNumbers.join(', ');
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then(evenNumbers => {
        // Multiply even numbers by 2 and log the result after 2 seconds
        return new Promise((resolve) => {
            setTimeout(() => {
                const multipliedNumbers = evenNumbers.map(num => num * 2);
                document.getElementById('output').textContent = multipliedNumbers.join(', ');
                resolve(multipliedNumbers);
            }, 2000);
        });
    });
