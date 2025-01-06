function foo(a, b) {
  // Solution 1: Throw an error if null values are encountered
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.');
  }
  return a + b;
}

function foo2(a, b) {
  // Solution 2: Use default values
  const aVal = a === null ? 0 : a; // Use a default value of 0 if 'a' is null
  const bVal = b === null ? 0 : b; // Use a default value of 0 if 'b' is null
  return aVal + bVal;
}

function foo3(a, b) {
    // Solution 3: Using Optional Chaining (for more complex objects where null checks are needed further down)
    return (a ?? 0) + (b ?? 0);
}

console.log(foo2(null, 5)); // Output: 5
console.log(foo2(5, null)); // Output: 5
console.log(foo2(5, 5)); // Output: 10
console.log(foo3(null, 5)); // Output: 5
console.log(foo3(5, null)); // Output: 5
console.log(foo3(5, 5)); // Output: 10