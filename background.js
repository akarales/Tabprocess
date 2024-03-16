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
    Object.defineProperty(document, "visibilityState", {
      get: function() {
        return "visible";
      },
      configurable: true
    });
  
    console.log('Redefinition attempt completed.');
    }
catch (error) {
    console.error("Error during property redefinition:", error);
}
  