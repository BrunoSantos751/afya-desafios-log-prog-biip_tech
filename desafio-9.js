function removeDuplicates(arr) {
    // Seu código aqui
    R_duplicados = new Set(arr);
    new_arr = Array.from(R_duplicados);
    return (new_arr);
  }
  
  // Exemplo de uso:
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]