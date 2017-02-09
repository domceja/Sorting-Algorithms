// Bubble Sort
/*Each Iteration: element is compared with its neighbor (adjacent element) and swapped in not in order*/
/*How: smallest element will eventually bubble up to beginning of list during first iteration; n+1 smallest element will bubble up to beginning during next iteration*/
/*Time Complexity: Worst Case: O(N^2)*/
/*Space Complexity: O(1)*/
/*Adaptive: if iteration performs no swap, this is indicated the list is completed sorted and can break out of loop */
/*Stable: stable algorithm, logical ordering will remain in list*/
/*Comparisons: O(N^2)*/

window.onload = function () {
    function bubbleSorRight(list, iIndex, jIndex) {
        for (var i = 0; i < list.length; i++) {
                // Swapped flag; 
            var swapped = false;
            for (var j = list.length - 1; j > i; j--) {
                if (list[j] < list[j - 1]) {
                    swapElements(list, j, j - 1);
                    swapped = true;
                    console.log(swapped);
                }
            }
            printList(list);
              // if no swapped performed in second loop, the list is sorted
            if (!swapped) {
                console.log(swapped);
                break;
            }
        }
    }


    function bubbleSortLeft(list, iIndex, jIndex) {
        for (var i = 0; i < list.length; i++) {
            // Swapped flag; 
            var swapped = false;
            for (var j = i + 1; j < list.length; j++) {
                if (list[i] > list[j]) {
                    swapElements(list, i,j);
                    swapped = true;
                    console.log(swapped);
                }
            }
            printList(list);
            // if no swapped performed in second loop, the list is sorted
            if (!swapped) {
                console.log(swapped);
                break;
            }
        }
    }

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

    bubbleSortLeft([9, 1, 8, 2]);
}