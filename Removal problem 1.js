// Function to check if parentheses are valid
function isValidParentheses(str) {
    let stack = []; // used to store opening brackets

    // mapping of closing to opening brackets
    let pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // loop through each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // if opening bracket, push to stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } 
        // if closing bracket
        else {
            // pop last element from stack
            let top = stack.pop();

            // check if it matches
            if (top !== pairs[char]) {
                return false;
            }
        }
    }

    // if stack is empty, it's valid
    return stack.length === 0;
}

// TEST CASES
console.log(isValidParentheses("()"));       // true
console.log(isValidParentheses("()[]{}"));   // true
console.log(isValidParentheses("(]"));       // false
console.log(isValidParentheses("([)]"));     // false
console.log(isValidParentheses("{[]}"));     // true