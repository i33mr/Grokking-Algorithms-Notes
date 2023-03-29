Hash function is a function where you put in a string, and you get back a number

##### Hash function requirements:
1. must be consistent
2. Should map different words to different numbers.

Putting a hash function and an array together results in a hash table, a useful data structure.

Good programming languages include built hash tables. Like in Python, for example, they're called dictionaries.

### Hash Table use cases:
1. Create a mapping from one thing to another thing
2. Look something up
3. Prevent duplicate entries.
4. As a cache

Mapping web addresses to IP addresses is a perfect example for the use of Hash Tables.

## Collisions
Collision is when two keys have been assigned the same slot. We need a way to work around collisions. The simplest one is to start a linked list at the slot if multiple keys map to it.

Good hash functions will map keys evenly all over the hash. Make sure to use a good hash function to avoid long linked lists.

## Performance
In average, hash tables take O(1) (constant) for search, insert, and delete, and O(n) for the worst case. [[Common Big O Run times]]

O(1) means that the time taken will stay the same, regardless of how big the hash table is. 

At the average case, hash tables are as fast as arrays at searching, and as fast as linked lists at insertion and deletion. But in the worst case, they're slower than both. Therefore, we need to avoid collisions.

#### To avoid collisions, we need:
1. A low load factor (calculated by dividing the number of items in hash table by the total number of slots)
2. A good hash function

Having a load factor greater than 1 means you have more items than slots in your array, and there is no way each item will get its own slot.

Once the load factor starts to grow, you need to add more slots to your hash table.

A good rule of thumb is, resize when your load factor is greater than 0.7.
