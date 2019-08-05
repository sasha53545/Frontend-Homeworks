function MarkAndToys () {
    var n = 7;
    var k = 50;
    var prices = [1, 12, 5, 111, 200, 1000, 10];

    bubbleSort(prices);
    sumToys(prices, k);

    function bubbleSort(array) {
        var tmp = 0;
        for (var i = 0; i < array.length - 1; i++) {
            for (var j = i + 1; j < array.length - i; j++) {
                if (array[j] > array[j+1]) {
                    tmp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = tmp;
                }
            }
        }
        return array;
    }
    function sumToys(array, a) {
        var sumPrice = 0;
        var sumToys = 0;
        for (var i = 0; i < array.length; i++) {
            if (sumPrice < a) {
                sumPrice += array[i];
                sumToys++;
            }
        }
        return sumToys;
    }
    console.log(sumPrice);
}