function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
  };
  
  var unsorted = [23, 45, 16, 37, 3, 99, 22];
  var sorted = quicksort(unsorted);
  
  console.log('Sorted array', sorted);


  function swap(arr, xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
 
//-----------------------------------------------------------------------------------------------------------------------------------------

function bubbleSort( arr, n)
{
var i, j;
for (i = 0; i < n-1; i++)
{
    for (j = 0; j < n-i-1; j++)
    {
        if (arr[j] > arr[j+1])
        {
        swap(arr,j,j+1);
         
        }
    }
 
}
}

function printArray(arr, size)
{
    var i;
    for (i=0; i < size; i++)
        document.write(arr[i]+ " ");
    document.write("\n");
}

var arr = [64, 34, 25, 12, 22, 11, 90];
var n = 7;
document.write("UnSorted array: \n");
printArray(arr, n);

bubbleSort(arr, n);
document.write("Sorted array: \n");
printArray(arr, n);