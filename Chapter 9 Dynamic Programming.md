The knapsack problem is one example where we can apply dynamic programming.

![[Pasted image 20230321130110.png]]

The simple solution for knapsack is to try every possible set to find the one that gives the most value. This approach is very slow, and it takes O($2^n$) time.

Dynamic programming starts by solving sub-problems and builds up to solving the big problem. 

For the knapsack problem, we can start by solving for smaller knapsacks, and then work up to solving the original problem.

**Every dynamic programming algorithm starts with a grid**

For example, here is the grid for the knapsack problem, the rows are the items and the columns are the weights. The grid starts empty and once it is filled in, we will have the answer.

![[Pasted image 20230321125500.png]]

Starting with the first row (the guitar row), we have to decide whether we steal it or not, since the guitar is 1lb, and the first cell knapsack capacity is also 1lb, we can fit the guitar. So the value of the cell becomes $1500. We do the same thing for the rest of the cells in the first row (since we're in the first row, we have only the guitar to choose from).

![[Pasted image 20230321130301.png]]

The current max if we had a knapsack of the capacity 4lb is $1500. 

Moving on to the stereo row, here we can steal the stereo or the guitar. At every row, you can steal the item at that row or the items in the rows above it. Since we can't fit the stereo in any of the first 3 cells, the greatest value of them remain $1500. In the 4th cell, since the stereo can fit, its value becomes the new max value for 4lb capacity. 

![[Pasted image 20230321130737.png]]

As for the laptop row, since it weigh 3lb, we can't fit it in the first 2 cells, so the max for both stays 1500. In the 3rd cell, the laptop fits in the knapsack and its value is greater than the current max (1500), therefore it becomes the current max for 3lb capacity. 

![[Pasted image 20230321130949.png]]

In the 4th cell, the current estimate is 3000, and the laptop fits in the knapsack, although its value is less than the current estimate, but we have 1lb free, and looking at the maximum 1lb knapsack, we find its value is 1500, so adding the 1500 from the 1lb knapsack to the 2000 of the laptop, we can a greater value, 3500.

![[Pasted image 20230321131349.png]]

**Each's cell's value is calculated using this formula:**
cell \[i]\[j] = max of {the previous max OR value of current item + cell \[i-1]\[j - item's weight]}

**Questions: Do we have to recalculate everything if we add a new item?**
	No, we can add a new row for the new item and make the calculations for it to find the new answer. Unless we add items that require the change of weights, for example adding a necklace that weighs 0.5lb will require us to change the grid to include 0.5, 1, 1.5,... etc weights. 

**Questions: Does changing the order of the rows affect the answer?**
	No

**Question: Can dynamic programming figure if we can take fracture of an item (stealing some rice or lentils)?**
	No, there is no way to figure out if we should take half an item. But this can be solved using a greedyy algorithm by taking as much as you can from the most valuable item, and when it runs out, move to the next item...

![[Pasted image 20230321133801.png]]

### Important note: Dynamic programming only works when each sub-problem is discrete, and doesn’t depend on other sub-problems.

**Dynamic programming is useful when you’re trying to optimize something given a constraint. In the knapsack problem, you had to maximize the value of the goods you stole, constrained by the size of the knapsack.**

**You can use dynamic programming when the problem can be broken into discrete sub-problems, and they don’t depend on each other.

Tips to come up with a dynamic programming solution:
* Every dynamic programming solution involves a grid
* The values in the cells are usually what you’re trying to optimize.
* Each cell is a subproblem, so think about how you can divide your problem into subproblems.

### Longest Common Substring Problem
Suppose we have a dictionary website. When someone misspells a word, we want to be able to guess what word was meant. For example, someone types *hish* instead of *fish*.

To make the grid, we need to answer a few questions:
* What are the values of the cells?
* How to divide the problem into sub-problems?
* What are the axes of the grid?

In this problem, we're trying to optimize the value of the cells, which is the length of the longest substring that the two strings have in common. 

To divide the problem into sub-problems, we compare substrings. Instead of comparing hish and fish, we compare fis and his, and each cell contains the length of the longest substring the two substrings have in common. Therefore, the axis of the grid are the two words. 

#### Filling the grid
if the letters don't match, the value is zero. If the letters match, the value of the top-left neighbor + 1. In this problem, the final solution might not be the last cell, unlike the knapsack problem. For the longest common substring, the solution is the largest number in the grid. 

![[Pasted image 20230327121751.png]]

### The longest common subsequence
Suppose someone searched for *fosh* is it closer to fish or fort? Comparing them using the longest common substring gives the following solution:
![[Pasted image 20230327122554.png]]
While in reality, fish is the closer word. That's why we need to use the longest common subsequence, which in the number of letters in a sequence that the two words have in common. Here is how it is calculated:
![[Pasted image 20230327122840.png]]


### Some dynamic programming real-world use cases
* Biologists use the longest common subsequence to find similarities in DNA strands.
* git diff tells you the differences between two files, and it uses dynamic programming to do so.
* Levenshtein distance measures how similar two strings are, it is used for everything from spell-check to figuring out whether a user is uploading copyrighted data.
