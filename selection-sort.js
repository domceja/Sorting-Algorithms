window.onload = function () {

// Selection Sort
    /*Each iteration: One element is selected and compared with every other element to find smallest element; Place smallest element at beginning of list; 2nd element is compared against n-2 elements... */
    /*How: Nested Loops; compare n to n+n, if n is greater, swap element*/
    /*Time Complexity: O(N^2)*/
    /*Space Complexity: O(1)*/
    /*Comparsions: O(N^2)*/
    /*Swaps: O(N)*/
    /*Stable: Not stable because elements that are equal might be re-arranged*/
    /*Adaptive: Not adaptive because there is no way to know that data is sorted and can break out of loop early; does not do any better with near-sorted list or non-sorted list*/

    function selectionSort(arr) {
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    swapElements(arr, i, j);
                    printList(arr);
                }
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


    var arrToSort = [5, 3, 8, 1, 2, 6, 7, 4, 9, 0]

    var selectSort = " Selection Sort Algorithm";
    console.time(selectSort);
    selectionSort(arrToSort);
    console.timeEnd(selectSort)
}