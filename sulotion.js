function checkVariable(input) {
    switch (typeof input) {
        case 'string':
            return "string";
        case 'number':
            return "number";
        case 'boolean':
            return "boolean";
        case 'bigint':
            return "bigint";
        case 'undefined':
            return "undefined";
        case 'object':
            // This handles both null and actual objects
            return "object";
        default:
            return "unknown";
    }
}
function generateIDs(count) {
    let ids = [];
    for (let i = 0; i < count; i++) {
        // Skip the number 5
        if (i === 5) {
            continue; 
        }
        // Add the ID to the array
        ids.push(`ID-${i}`);
    }
    return ids;
}

// Example usage:
// generateIDs(7) would return: ["ID-0", "ID-1", "ID-2", "ID-3", "ID-4", "ID-6"]

function calculateTotal(...numbers) {
    // The second argument (0) sets the initial value of the accumulator
    return numbers.reduce((sum, num) => {
        // Validation: Check if the current argument is a number
        if (typeof num !== 'number') {
            throw new TypeError("Invalid input: All arguments must be numbers");
        }
        return sum + num;
    }, 0);
}

// Example usage:
// calculateTotal(1, 2, 3, 4); // Returns 10
// calculateTotal(1, '2', 3);  // Throws: TypeError: Invalid input: All arguments must be numbers


function getTopScorers(playerList) {
    return playerList
        .filter(player => player.score > 8) // Keep players with score > 8
        .map(player => player.name)         // Extract only the names
        .join(", ");                         // Combine with ", "
}

// Example usage:
const players = [
    {name: "Alice", score: 10}, 
    {name: "Bob", score: 5},
    {name: "Charlie", score: 9}
];

console.log(getTopScorers(players)); // Output: "Alice, Charlie"

class Item {
    // The # prefix makes this field truly private
    #discount = 0.1; 

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // A 'getter' allows read-only access to the calculated value
    get finalPrice() {
        return this.price - (this.price * this.#discount);
    }
}

// Example usage:
const shirt = new Item("Shirt", 50);
console.log(shirt.finalPrice); // 45

// Attempting to access the private field directly will cause a SyntaxError:
// console.log(shirt.#discount); // Error: Private field '#discount' must be declared in an enclosing class

