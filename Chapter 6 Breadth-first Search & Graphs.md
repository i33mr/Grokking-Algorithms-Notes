Breadth first search allows to find the shortest path between two things. 

##### Examples on the usage of BFS:
1. Write a checkers AI that calculates the fewest moves to victory
2. Write a spell checker, find the fewest edits from the misspelling to a real word. 
3. Find the doctor closest to you in your network.

Graphs algorithms are some of the most useful algorithms.

A graph models a set of connections. 

BFS can help to answer two types of questions:
* Question type 1: Is there a path from node A to node B?  
* Question type 2: What is the shortest path from node A to node B?

You need to check nodes in the order they were added to the search list, so the search list needs to be a queue. Otherwise, you won’t get the shortest path.

Queue: A data structure to add and access data in the order they were added in a FIFO way.

**To implement a graph, we need to have several nodes and have a way to connect them. A good structure to make relationships is a hash table ([[Chapter 5 Hash Tables (Hash maps, maps, dictionaries)]]) which allows us to connect key and value, in this case, mapping a node to all of its neighbors.**,

graph[“you”] = [“alice”, “bob”, “claire”]

In directed graphs, the relationship is only one way. 

Undirected graphs don't have arrows, the relationship is in both ways.

If we search the whole graph, that means we will follow each edge, so the running time is at least **O(number of edges).** Adding nodes to the queue take O(1), so doing this for every node will take **O(number of nodes + number of edges) i.e O(V+E)** 

### Topologicall sort
A way to make an ordered list out of the graph. 

**A tree is a special type of graph, where no edges ever point back.**