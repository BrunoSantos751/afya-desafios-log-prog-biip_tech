function filterEvenNumbers(arr) {
    par= arr.filter(function (arr) {return arr %2 === 0});
    return (par)
  }
  
  // Exemplo de uso:
  console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]