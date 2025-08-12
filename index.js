console.log("This is the Chad Repoo index file."); 
// trying to make this dumbass show on github

//callback functions
// Example of a function that takes a value and a callback function
function processNumber(number, callback) {
    const result = number * 2;
    if (callback && typeof callback === "function") {
        callback(result);
    }
}

// Usage:
processNumber(5, function(result) {
    console.log("The result is:", result);
});

// Example of try-catch in Node.js for error handling
function safeProcessNumber(number, callback) {
    try {
        if (typeof number !== "number") {
            throw new Error("Input must be a number");
        }
        const result = number * 2;
        if (callback && typeof callback === "function") {
            callback(null, result);
        }
    } catch (error) {
        if (callback && typeof callback === "function") {
            callback(error);
        }
    }
}

// Usage with error handling:
safeProcessNumber("not a number", function(err, result) {
    if (err) {
        console.error("Error:", err.message);
    } else {
        console.log("Safe result is:", result);
    }
});
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    if (callback && typeof callback === "function") {
        callback();
    }
}

greet("Chad", function() {
    console.log("Callback function executed.");
});