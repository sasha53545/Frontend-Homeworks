/**
<<<<<<< HEAD
 * https://www.hackerrank.com/challenges/mark-and-toys/problem
 *
 * @param prices
 * @param k
 * @return {number}
 */
export const maximumToys = (prices, k) => {
    var sumPrice = 0;
    var sumToys = 0;
    var tmp = 0;

    for (var i = 0; i < prices.length - 1; i++) {
        for (var j = 0; j < prices.length - i; j++) {
            if (prices[j] > prices[j+1]) {
                tmp = prices[j];
                prices[j] = prices[j+1];
                prices[j+1] = tmp;
            }
        }
    }

    for (var i = 0; i <= prices.length; i++) {
        if (k >= (sumPrice + prices[i])) {
            sumPrice += prices[i];
            sumToys++;
        }
    }
    console.log(prices);
    return sumToys;
}