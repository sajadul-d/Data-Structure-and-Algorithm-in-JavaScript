//Bubble Sort
//Time Complexity of Bubble sort = O(n^2)
//The bubble sort has a space complexity of O(1)
const numbers = [23, 54, 12, 8, 45, 90, 2, -3, -12];

//assendind order bubble sort
function bubbleSort(array) {
  let flag;
  let c = 0;
  //outer loop
  for (let i = 0; i < array.length - 1; i++) {
    //bubble sorting trick (j<l-1-i) and use flag for stopping the inner loop after completing the sort
    //flag =  0 and flag = 1 in inner loop
    flag = 0;
    for (let j = 0; j < array.length - 1 - i; j++) {
      c++;
      if (array[j] > array[j + 1]) {
        //swap the array elements using array destructuring
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        flag = 1;
      }
      //play an importent role for improving the performance
      //without this the inner loop = 36
      //and with this the inner loop will be = only 8
      //so this is the bubble sort algorithm tecnique
      if (flag === 0) {
        break;
      }
    }
  }
  //testing improvement
  console.log(c);
  return array;
}

//decending sorting with bubble sort algorithm
const decBubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] < array[j + 1]) {
        //swap the array elements using array destructuring
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};

//call the assendingbubble sort function and print the output
const assendingSorted = bubbleSort(numbers);
console.log(assendingSorted);

//decending sorting
const decendingSorted = decBubbleSort(numbers);
console.log(decendingSorted);
