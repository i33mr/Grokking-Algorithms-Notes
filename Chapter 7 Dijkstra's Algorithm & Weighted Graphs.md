In [[Chapter 6 Breadth-first Search & Graphs]] BFS can find the path with the fewest nodes, but if we add time between the nodes, we need another algorithm to find the *fastest* path, which is Dijkstra's algorithm.

There are 4 steps to implement Dijkstra's algorithm:
1. Find the cheapest node, which is the node that you can get to in the least amount of time.
2. Update the costs of the neighbors of this node if they are cheaper to reach using this node.
3. Repeat until you've done this for every node in the graph.
4. Calculate the final path.

In Dijkstra's, each edge has a number associated with it, called weight.

A graph with weights is called a weighted graph, and a graph without weights is called an unweighted graph.

**To calculate the shortest path in an unweighted graph, use BFS. [[Chapter 6 Breadth-first Search & Graphs]]**
**To calculate the shortest path in a weighted graph, use Dijkstra's algorithm.**

Some graphs have cycles, where you travel around and end up in the same node. When trying to find the shortest path, we shouldn't follow cycles, since they only add to the cost.

in an undirected graph, where both nodes point to each other, every pair of nodes is a cycle.

#### Dijkstra's algorithm only works with directed acyclic graphs

**The key idea behind Dijkstra’s algorithm: Look at the cheapest node on your graph. There is no cheaper way to get to this node!**

We need to keep track of the father of each node we reached in order to find the path.

Shortest path doesn't have to be about physical distance, it is generally about minimizing something. 

#### Dijkstra's algorithm can't be used if we have negative-weight edges
Once you process a node (arriving at it and updating the costs of its neighbors), it means there’s no cheaper way to get to that node. 

**To find the shortest path in a graph with negative-weight edges, we can use Bellman-Ford Algorithm, which follows dynamic programming strategy, where we try out all possible solutions and pick the best one: https://www.youtube.com/watch?v=FtN3BYH2Zes**



