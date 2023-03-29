Divide and conquer is a tool to be thought of when we get a new problem (Can I solve this if I use divide and conquer?)

Quick sort is a divide and conquer algorithm. 

Divide and conquer algorithms are recursive algorithms.

To solve problems using divide and conquer, we use two steps:
1. Find the base-case, which is the simplest possible case.
2. Divide the problem until it becomes the base case.

We have a farm that we want to divide evenly:
1. we start with a farm with the dimensions of 1680 x 640
2. we make the biggest possible boxes, which in this case are 2 boxes with the size 640 x 640 and 1 box of the size 680 x 400
3. We repeat this process on the box left until we end up with 2 evenly sized boxes of 80 x 80. 
4. The 80 x 80 box is the base case.
5. So, for the original farm, the biggest plot size you can use is 80 × 80 m.

**Divide and conquer isn’t a simple algorithm that you can apply to a problem. Instead, it’s a way to think about a problem.**

**When you’re writing a recursive function involving an array, the base case is often an empty array or an array with one element.** 

#### Functional Programming
Regarding [[Chapter 3 Recursion]] and why they are important, some programming languages don't include loops (like **Haskell**), so using recursion there is crucial. 

## Quick sort
Much faster than selection sort ([[Chapter 2 Arrays, Linkedlist, and Selection Sort]]) and it is used frequently in real life. 

Base case: Empty arrays and arrays with one element. 

For a bigger array of size 2, check if the first element is smaller than the second, if not, swap them. 

#### Implementing quick sort steps
1. Pick an element from the array, which is called *pivot*
2. Find the elements smaller than the pivot and the elements larger than the pivot, this process is called partitioning. 
3. Call quick sort recursively on the two sub-arrays.

**Note: be aware of not mixing quick sort and merge sort.**

**Quick sort, in the worst case, and depending on the pivot picked, can take up to O($n^2$) which is as slow as selection sort. While on the average case, it takes O(n log n). On the other hand, merge sort is always O(n log n). So why not use merge sort, then?**

We usually ignore the *constant* when two algorithms have different Big O times. 

Merge sort has a larger constant compared to quick sort, so if quick sort was O(n log n), it is faster.

In practice, Quick sort is faster because it hits the average case way more often than the worst case.

## Average case vs. Worst case
In the best case scenario for quick sort, each level in the stack takes O(n) operations to complete, and it has O (log n) levels, therefore the run time is O(n log n). While in the worst case scenario, the stack will has O(n) levels, so the algorithm will take O($n^2$) time. The best case is the average case.

Note: If you’re implementing quick sort, choose a random element as the pivot. The average runtime of quick sort is O(n log n)

