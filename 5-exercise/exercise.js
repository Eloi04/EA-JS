
// Objective: Practice array manipulation using functional patterns (filter, map, reduce, and destructuring) by processing real data from an API.
// Filter: Only include users whose id is an even number.
// Transform: Create a new array of objects containing only the id, name, and the city (extracted from the nested address object).
// Add: Insert a "Guest User" at the beginning of the list without mutating the original result.
// Statistics: Calculate the total number of characters in all usernames combined using reduce.

fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(users => {
      // YOUR CODE STARTS HERE
      // 1. Filter even IDs
      console.log("--- Processed Users ---");
         const res1 = users.filter((user) => user.id %2 === 0);
         console.log("Filtered Users:", res1);

      // 2. Map to clean objects {id, name, city}
          const res2 = res1.map(user => {
            const { id, name, address } = user;
            return { id, name, city: address.city };
          });
          console.log("Mapped Users:", res2);
         // 3. Add Guest User at the start using Spread (...)
      
      console.log("--- Statistics ---");
      // 4. Reduce to count total characters in names
  });