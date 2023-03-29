Recursion is where a function calls itself. Example:
A box that includes more boxes, whenever we find a new box, we need to fetch it until there are no boxes left, or until we find a key. Look for the code example.

##### We only use recursion when it makes the solution clearer, there is (usually) no performance benefit to using recursion.

“Loops may achieve a performance gain for your program. Recursion may achieve a performance gain for your programmer. Choose which is more important in your situation!”

Every recursive function has 2 parts, base case and recursive case. 

## Call stack

When a function calls a function (in recursion for example) the called function is put on top of the call stack. Important thing to note in recursion, we can't access the variables from different calls in other calls.

Recursion's call stack is convenient, but there could be cost, saving all the info can take up a lot of memory. When the call stack is too tall and is taking too much memory, we have 2 options:
1. Re-write the code using loops instead
2. Use tail recursion (supported by some languages)

**Note to self: Use tail recursion whenever possible**

Tail recursive is a function where recursive is the last thing executed.