function sum(fisrt,...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
  }
  console.log(sum(1, 2, 3)); // Output: 6
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  
