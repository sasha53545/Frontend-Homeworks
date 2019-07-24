/**
 * https://www.hackerrank.com/challenges/sock-merchant/
 * @param n
 * @param ar
 */
export function sockMerchant(n, ar) {
    var counts = {};
    var arrFinal = [];
    var k = 0;
    for (var i = 0; i < ar.length; i++) {
        var num = ar[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    for (var key in counts) {
        counts[key] = Math.floor(counts[key]/2);
        k += counts[key];
    }
    return k;
}