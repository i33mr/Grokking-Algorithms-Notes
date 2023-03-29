## Why use linked list?

Adding a new item to the array causes the whole array to be moved to another space in memory, since array elements are stored next to each others, and the next space might be occupied by other things, unless we held seats, which also has its own downsides. Linked list solves this issue, since our items can be anywhere in the memory. 

**Therefore, linked lists are best for insertion.**

Linked lists are great if you’re going to read all the items one at a time: you can read one item, follow the address to the next item, and so on. But if you’re going to keep jumping around, linked lists are terrible.

## Array vs Linked List
Run times for arrays and linked lists:
|  | Array | List |
| ----- | ---- |----|
| Reading | O(1)| O(n) 
| Inserting | O(n)| O(1)
| Deletion | O(n)| O(1)

Why does it take O(n) time to insert an element into an  array? Suppose you wanted to insert an element at the beginning of an array. How would you do it? How long would it take?

If we have a lot of inserts and few reads, it is better to use Lists, and vice versa. 

Lists are better for inserting elements in the middle, since we only change what the previous element is pointing to, while in arrays, we need to shift all the rest of the elements down.

Same case for deletion.

Take a look at arrays of linked lists, hash tables, B-trees.

## Selection Sort

Run time: O($n^2$)

In selection sort, we find the smallest element in the array, pop it into a new array. This step is repeated until the original array is empty.