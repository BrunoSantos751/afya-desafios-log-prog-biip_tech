function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
      const keyValue = obj[key];
      if (!acc[keyValue]) {
        acc[keyValue] = [];
      }
      acc[keyValue].push(obj);
      return acc;
    }, {});
  }
  
  // Exemplo de uso:
  const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 30 }
  ];
  console.log(groupBy(data, 'age'));