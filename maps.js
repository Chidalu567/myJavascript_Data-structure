const firstMap = new Map([["a","b"]]);


// insertion in maps
firstMap.set("name", "chidalu")
firstMap.set("age","25")

// removing in maps
firstMap.delete("a");

// checking for existence
console.log(firstMap.has("name"))

// looping through the maps
for (let [key, value] of firstMap) {
    console.log(key, value);
}