# Trees
A binary search tree can be used to insert elements into the right slot without the need to sort the array after each insertion. For every node, the nodes to its left are smaller and the nodes to its right are larger in value. Searching in BST takes O(log n) in average and O(n) in the worst case. Although searching in [[Chapter 1 Binary Search]] takes O(log n) in the worst case, but BST has a lot faster insertion and deletion times (on average).

|  | Array | BST |
| ----- | ---- |----|
| Search | O(log n)| O(log n)
| Inserting | O(n)| O(log n)
| Deletion | O(n)| O(log n)

**We can't use random access in BST, e.g. accessing the X of the tree.**
**Imbalanced trees (where the tree is leaning to the right/left) don't have the same performance as balanced trees.** 

Examples of BSTs that balance themselves:
* B-trees (commonly used to store data in databases)
* Red-black trees
* Heaps
* Splay trees

# Inverted Indexes
A commonly used data structure to build search engines. It is a hash map that maps words to places where they appear. 


# The Fourier Transform
This algorithm can separate and process signals (music, images, etc.), where it can be used to boost specific music frequencies, compress music, compress images, etc. This algorithm has a lot of use cases, and it is worth more investigation. 

# Parallel Algorithms
To make your algorithms faster, you can change them to run in parallel across all the processor cores at once. For example, the best sorting algorithm can run in roughly O(n log n), but using parallel algorithms allow us to enhance it to O(n). There is a parallel version of [[Chapter 4 Quicksort & Divide and Conquer]] that sorts arrays in O(n). 

Parallel algorithms are hard to design and also difficult to ensure that they work properly and to predict what kind of speed boost you'll experience. Having two cores doesn't mean the algorithm will run twice as fast. For the following reasons:

* Overhead of managing the parallelism
* Load balancing: How do you distribute the work evenly, so both cores are working equally hard on tasks?


## MapReduce Algorithm
The MapReduce algorithm is a distributed algorithm. It is used to run an algorithm across multiple machines. It can be used through Apache Hadoop (open source tool). An example use case is running a complicated SQL query on a table with trillions of rows. MapReduce is built from two ideas: *map* function and *reduce* function.

**The map function takes an array and applies a function to each item in the array, for example, doubling every item in the array. It automatically spread out the work across machines.** 

**The reduce function reduces the list of items down to one item. For example, reducing an array of numbers from 1 to 5 to a single item 15**

## Bloom filters and HyperLogLog
It is useful when we need to check if an item belongs in a very large set. The main difference compared to a hash in this use case is that the hash would be too big if we have so much data. That's where Bloom filters and HyperLogLog come useful. 

### Bloom filters
A probabilistic data structure. The answer they give could be wrong, but is probably correct. In Bloom filters, false positives are possible, but false negatives are not. They’re great when you don’t need an exact answer. An example use case is Google checking whether it crawled a website.

### HyperLogLog
Approximates the number of unique elements in a set, it doesn't give an exact answer. But it comes very close and uses only a fraction of the memory a task like this would otherwise take.

# The SHA algorithms
A hashing algorithm that generates hashes for strings. It generates a different hash for each string. Example use cases:
* Compare files: we can check if two files are the same by comparing their SHA hash.
* Checking passwords: comparing the entered password with the stored password without revealing it. 

# Locality-sensitive Hashing
A locality insensitive algorithm completely changes the hash if one character changes (e.g. SHA). But sometimes, we need the opposite. Simhash is a locality sensitive hashing algorithm, where if we change a string a bit, it generates a hash that is only a little different. This allows to compare strings and see how similar they are. Example use cases:
* Google uses Simhash to detect duplicates while crawling the web.
* A teacher could use Simhash to see whether a student was copying an essay from the web.
* A website could use Simhash to determine whether uploaded content is copyrighted.

**Simhash is useful when looking for similar items.** 


# Linear programming
Linear programming is used to maximize something given some constraints. It can solve problems similar to: Assume your company sells two items: shirts and totes. 1 meter of fabric and 5 buttons are required for each shirt. 2 meters of fabric and 2 buttons are required for each tote. You have 11 meters of fabric and 20 buttons to work with. You earn $2 for each shirt and $3 for each tote. How many shirts and totes should you produce in order to maximize your profits?

Linear programming is useful for optimization. All the graph algorithms can be done through linear programming. 
