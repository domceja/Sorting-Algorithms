// Selection Sort
/*Assumes a sorted sublist of size 1 and inserts addition elements in the right position*/
/*Each iteration we compare the last element in sorted sublist to the adjacent element; if sorted, we insert into sroted sublist else we perform swap (bubble) on sublist until element is in sorted position*/
/*Divide and Conquer approach*/
/*Low overhead and faster algorithm than bubble and selection sort*/
/*Time Complexity: Worst Case - 0(N^2)*/
/*Space Complexity: O(1); sorts in place*/
/*Stabe: Stable sort, as elements bubble to correct position in sublist, the original order of list is maintained*/


function insertionSort(arr) {
                // go up to second to last element to check is the last element is in right position
    for (var i = 0; i < arr.length - 1; i++) {
                // bubble the element outside the sorted sublist to right of position; we assume i is sorted 
        for (var j = i + 1; j > 0; j--) {
                // start at index 1 because we assume that index 0 is a sorted sublist 
            if (arr[j] < arr[j - 1]) {
                swapElements(arr, j, j - i);
                // if no swapped perform, you can break of out jth loop; this is an adaptive algorithm
            } else {
                break;
            }
            printList(arr);
        }
    }
}

var testArr = [4, 6, 1, 2, 9, 0, 8, 7, 5]
/*
// first i loop
i = 0, j = i + 1;
arr[j] = 6,  arr[j-1] = 4; 6 < 4; //hit e block and breakout of jth loop
// second i loop
i = 1, j = i + 1(2)
testArr = [4, 1, 6, 2, 9, 0, 8, 7, 5]
arr[j] = 1, arr[j - 1] = 6; 1 < 6 //hit i block and swap elements; decrement jth loop; j = 1; 1 > 0; arr[j] = 1, arr[j-1] = 4 --> hit i block and swap elements; decrement jth loop and break out of j loop

// third i loop
testArr = [1, 4, 6, 2, 9, 0, 8, 7, 5]
i = 2, j = i + 1(3)
testArr = [1, 4, 2, 6, 9, 0, 8, 7, 5]
arr[j] = 2, arr[j - 1] = 6; 2 < 6 //hit i block and swap elements; decrement jth loop; j = 2; 2 > 0; arr[j] = 2, arr[j-1] = 4 --> swap elements and repeat
*/




// Helper Methods 
// print list for debugging
function printList(list) {
    console.log(list);
}
// swap two elements in list 
function swapElements(list, iIndex, jIndex) {
    var temp = list[iIndex];
    list[iIndex] = list[jIndex];
    list[jIndex] = temp;
}


    //Divide and conquer algorithms 
/*use insertion sort to sort the elements that it breaks down in sublists*/