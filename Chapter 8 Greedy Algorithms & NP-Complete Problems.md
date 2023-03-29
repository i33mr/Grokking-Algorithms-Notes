Greedy algorithms are simple: at each step, pick the optimal move (review the classroom scheduling problem for context). At each step, we pick the locally optimal solution, and we end up with the global optimal solution.


### The knapsack problem
The knapsack problem shows that the greedy method doesn't give the **optimal** solution, but a close one. Therefore, greedy algorithms are used when we need an algorithm that provides a good solution, not perfect.


### Approximation Algorithms
In the set-covering problem, where we try to find the smallest set of radio stations to cover the 50 states, we need to list every possible subset of stations (this is called power set), and there are $2^n$ possible subsets. From these subsets, pick the set with the smallest number of stations that covers all the 50 states. This problem takes a long time (O($2^n$)) to solve it the greedy way. 

**Here is where the approximation algorithm help. Here is an example of an approximation solution: **
1. pick the station that covers the most states that haven't been covered yet, it's ok if the station covers some states that have been covered already.
2. Repeat until all the states are covered. 

Approximation solutions are judged by how fast they are, and how close they are to the optimal solution. 

* Sets are like lists, except sets can’t have duplicates.
* You can do some interesting operations on sets, like union, intersection, and difference.

We notice that Dijkstra's algorithm [[Chapter 7 Dijkstra's Algorithm & Weighted Graphs]] and BFS [[Chapter 6 Breadth-first Search & Graphs]] can both be considered greedy algorithms, because they make the locally optimal choice at each stage. 


### NP-complete problems
An example of the NP-complete problems is the traveling salesperson problem, where whenever we add a new city, the number of routes increases. Since this is a factorial function, the number of possible routes becomes big very fast, which is why it is impossible to compute the correct solution if we have a large number of cities.

The traveling-salesperson problem and the set-covering problem both have something in common: you calculate every possible solution and pick the smallest/shortest one. Both of these problems are NP-complete.

### How to identify NP-complete problems
There’s no easy way to tell if the problem you’re working on is NP-complete. Here are some giveaways:
* The algorithms run quickly with few items and extremely slow with more
* All combinations of X usually point to an NP-complete problem.
* If we have to calculate every possible version of X because it can't be broken into smaller sub problems.
* If your problem involves a sequence, and it’s hard to solve, it might be NP-complete.
* If your problem involves a set, and it’s hard to solve, it might be NP-complete.
* Can you restate your problem as the set-covering problem or the   traveling-salesperson problem? Then your problem is definitely NP-complete.
