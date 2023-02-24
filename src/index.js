module.exports = function towelSort(matrix) {
  if (!matrix) return []; // если матрица пустая, возвращаем пустой массив
  
  const result = []; // создаем переменную с пустым массивом
  for (let i = 0; i < matrix.length; i++) { // цикл для обхода по массиву
    const row = matrix[i]; // создаем переменную с частью массива
    if (i % 2 === 0) { 
      // четные
      for (let j = 0; j < row.length; j++) {
        result.push(row[j]); // добавляем числа в массив
      }
    } else {
      // нечетные
      for (let j = row.length - 1; j >= 0; j--) {
        result.push(row[j]);
      }
    }
  }
  
  return result;
}
