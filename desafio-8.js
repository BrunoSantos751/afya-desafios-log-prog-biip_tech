let c = 0;
function countOccurrences(arr, valor) {
    for (i in arr){
        if (arr[i] == valor){
            c += 1
        }
    }
    return c
  }
  
  // Exemplo de uso:
  console.log(countOccurrences([1, 2, 2, 3, 4, 2], 2)); // 3