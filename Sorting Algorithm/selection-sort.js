//Time Complexity = O(n^2)
//Space Complexity = O(1)
const numbers = [12, 54, 1, 67, -5, 9, 76, 17];
// [-5, 54, 1, 67, 12, 9, 76, 17]
// [-5, 1, 54, 67, 12, 9, 76, 17]
// [-5, 1, 9, 67, 12, 54, 76, 17]
// [-5, 1, 9, 12, 67, 54, 76, 17]
//[-5, 1, 9, 12, 17, 67, 54, 76]
//[-5, 1, 9, 12, 17, 54, 67, 76] -->sorded

//assending order sorting
const assendingSelectionSort = (array) => {
  //outer loop
  for (let i = 0; i < array.length; i++) {
    let min_index = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[min_index]) {
        min_index = j;
      }
    }
    //swap arra[i] to array[min_index] using array destructuring
    [array[i], array[min_index]] = [array[min_index], array[i]];
  }
  return array;
};

//assending order sorting
const decendingSelectionSort = (array) => {
  //outer loop
  for (let i = 0; i < array.length; i++) {
    let min_index = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] > array[min_index]) {
        min_index = j;
      }
    }
    //swap arra[i] to array[min_index] using array destructuring
    [array[i], array[min_index]] = [array[min_index], array[i]];
  }
  return array;
};

//assending calling and print
const assendingSorted = assendingSelectionSort(numbers);
console.log(assendingSorted);

//decending order sorting print
const decendingSorted = decendingSelectionSort(numbers);
console.log(decendingSorted);
