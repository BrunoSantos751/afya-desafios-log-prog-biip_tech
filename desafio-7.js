function findMaxValue(arr) {
    M= Math.max.apply(null, arr);
    return (M);
  }
  
  // Exemplo de uso:
  console.log(findMaxValue([1, 2, 3, 4, 5])); // 5