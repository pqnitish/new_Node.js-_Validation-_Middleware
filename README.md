# new_Node.js-_Validation-_Middleware
Topics Covered: Node.js and Express Middleware in Express Data Validation Error Handling HTTP Status Codes
 if (!Array.isArray(Cast) || !Cast.every(c => typeof c === 'string')) {
    errors.push("Cast must be an array of strings.");
  }
  logic explanation
  Array.isArray(Cast):
This checks if Cast is an array. For example:

Array.isArray(["John", "Jane"]) → true
Array.isArray("John, Jane") → false
Cast.every(c => typeof c === 'string'):
This checks if every item (c) inside the Cast array is a string. For example:

["John", "Jane"].every(c => typeof c === 'string') → true
[1, "Jane"].every(c => typeof c === 'string') → false

