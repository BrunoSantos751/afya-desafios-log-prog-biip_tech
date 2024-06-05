function sumValues(arr) {
    let soma = 0;
    console.log(arr.length)
    for (i in arr){
        soma = arr[i] + soma;
    }
    return (soma);
    
}

// Exemplo de uso:
console.log(sumValues([1, 2, 3, 4])); // 10