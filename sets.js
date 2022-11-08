const firstSet = new Set([1,2,3,4,9]);

// Inserting element in a set
firstSet.add(5);

// Removing element in a set
firstSet.delete(9)

// size of a set
console.log(firstSet.size);
// loop through element in a set
for (const item of firstSet){
    console.log(item);
}