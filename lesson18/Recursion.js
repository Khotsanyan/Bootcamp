function subSum(numArray, index = 1, i = 0, sum = numArray[i]) {
  if (i === numArray.length - 1) {
    console.log(sum);
    return;
  } else if (index !== numArray.length - 1) {
    console.log(sum);
    sum += numArray[index];
    subSum(numArray, index++, i);
  }
  return subSum(numArray, index , i++);
}
numArray = [2, 4, 5];
subSum(numArray);

function factorial(N) {
  if (N > 1) {
    return foo(N - 1) * N;
  } else return N;
}
//console.log(foo(5));
function sumOfArray(array, i = 0, sum = 0) {
  if (i === array.length) {
    return sum;
  }
  sum += array[i];

  return sumOfArray(array, i + 1, sum);
}
//console.log(sumOfArray([1, 2, 3, 4]));
function minArray(array, i = 0, min = +Infinity) {
  if (i === array.length) {
    return min;
  } else if (min > array[i] && array[i] > 0) {
    min = array[i];
  }
  return minArray(array, i + 1, min);
}
//console.log(minArray([10, 1, 2, -1, -2]));
