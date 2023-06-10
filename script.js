function findSeven(array) {
   if (array.includes(7)) {
     return "Found!";
   } else {
     return "there is no 7 in the array";
   }
 }
 console.log(findSeven([1, 2, 3, 4, 7, 6, 8])); // Output: Found!
 console.log(findSeven([8, 8, 33, 100])); // Output: there is no 7 in the array
 console.log(findSeven([3, 55, 60, 97, 86])); // Output: there is no 7 in the array