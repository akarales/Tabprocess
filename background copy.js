/* 
This is the background script for the extension, it runs in the background of the browser.

Video tutorial: https://vimeo.com/923628666

Goal: Ensure that there is a continuous stream of timestamps logged from contentScript.js

Rules: 
You can only change one file: this background.js file. 
When testing your code we will use the original files and only update the background.js file.

Testing: Use this site for easy testing https://ai-stealth-challenge.tiiny.site/

Hint: The solution is only a few lines of code.
*/
console.log("background.js running");

try {
    const methods = [
        () => simulateMouseMovement(),
        () => simulateKeyPress(),
        () => useWebWorker(),
        () => setInterval(() => logVisibilityState(), 100) // Log visibility state every 100 milliseconds
    ];

    for (const method of methods) {
        try {
            // Run each method 10 times per second indefinitely
            setInterval(method, 1000 / 10); // 1000ms / 10 = 100ms
            console.log("Method started:", method.name);
        } catch (error) {
            console.error("Error starting method:", method.name, error);
        }
    }

    console.log("All methods started.");
} catch (error) {
    console.error("Error during initialization:", error);
}

function simulateMouseMovement() {
    console.log("Simulating mouse movement...");
    // Insert code to simulate mouse movement here
}

function simulateKeyPress() {
    console.log("Simulating key press...");
    // Insert code to simulate key press here
}

function useWebWorker() {
    console.log("Starting Web Worker...");
    // Insert code to start Web Worker here
}

function logVisibilityState() {
    try {
        const visibilityState = document.visibilityState;
        console.log("Visibility state:", visibilityState);
    } catch (error) {
        console.error("Error getting visibility state:", error);
    }
}
