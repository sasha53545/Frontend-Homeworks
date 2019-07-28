/**
 * https://www.hackerrank.com/challenges/repeated-string
 *
 * @param s
 * @param n
 */
export function repeatedString(n, s) {
    var count = 0;
    var sum = 0;
    var aTail = 0;
    var array = s.split('');
    var sumEnter = (n - n % array.length) / array.length;
    var tail =  n - (sumEnter * array.length);
    console.log('sumEnter ' + sumEnter);
    console.log('tail ' + tail);

    for (var i = 0; i < array.length; i++) {
        if ('a' == array[i]) {
            count++;
        }
    }

    if (n % array.length == 0) {
        sum = count * (n / array.length);
    } else {
        tail = s.substring(0, tail).split('');
        console.log('qwerty' + tail);
        tail.forEach(element => {
            if (element === 'a') {
                aTail++;
            }
        });
        sum = count * sumEnter + aTail;
    }
    console.log('sum ' + sum);
    return sum;
}