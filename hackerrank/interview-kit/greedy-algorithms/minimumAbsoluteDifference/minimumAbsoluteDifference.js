/**
 * https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem
 * 
 * @param arr
 */
export function minimumAbsoluteDifference(arr) {
/*    function SelectionSort(arr) { //не удовлетворяет по времени
        var temp = 0;
        for (var i = 0; i < arr.length - 1; i++) {
            var min = i;
            for (var j = i + 1; j < arr.length; j++) {
                if (Math.abs(arr[j]) < Math.abs(arr[min])) {
                    temp = arr[min];
                    arr[min] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    } */
    /*function mergeSort (arr) {  // не получилось реализовать
        if (arr.length <= 1) {
            return arr;
        }

        var arrFinal = [];
        var i = 0;
        var j = 0;
        var middle = Math.floor(arr.length / 2);
        var left = arr.slice(0, middle);
        var right = arr.slice(middle);

        while (i < mergeSort(left.length) && j < mergeSort(right.length)) {
            if (Math.abs(left[i]) < Math.abs(right[j])) {
                arrFinal.push(Math.abs(left[i]));
                i++;
            } else {
                arrFinal.push(Math.abs(right[j]));
                j++;
            }
        }
        return arrFinal;
    }*/
    arr.sort(function(a, b) {
        return Math.abs(a) - Math.abs(b);
    });
    console.log('sort:' + arr);

    var arr2 = [];
    for(var i = 0; i < arr.length - 1; i++) {
        arr2.push(Math.abs(arr[i+1] - arr[i]));
    }
    arr2.sort((a, b) => a - b);
    return Math.abs(arr2[0]);
}