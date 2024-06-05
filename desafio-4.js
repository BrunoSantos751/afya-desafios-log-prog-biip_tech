function doubleValues(arr) {
    for (i in arr){
        arr[i] = arr[i] * 2;
    } return arr;
}

// Exemplo de uso:
console.log(doubleValues([1, 2, 3, 4])); // [2, 4, 6, 8]