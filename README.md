# Tabprocess
Write the few lines of code needed to ensure a continuous stream of timestamps are logged, even when the tab is not visible.

# More details
When injecting javascript code into a webpage via a chrome extension or otherwise, a common use case is to continue performing actions on the webpage even while the user does not have that tab active. Unfortunately, most websites check if the tab is active using very sophisticated methods. Switching tabs, minimizing/closing the browser, or moving the browser off screen, all trigger the tab to become inactive. When a tab is inactive, web pages usually throttle most javascript code execution. The goal here is to circumvent this limitation, and we’ve made it easy to test your solutions with the sample code in the challenge. You only need to write a few lines of code to pass the challenge.

# Rules
There is only one rule. You can only change the code in one file: background.js. When testing your code, we will use the original challenge code and only add in your updated background.js file.

Submission:
Please reply to this only with your updated background.js file.
