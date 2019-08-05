/**
 * https://www.hackerrank.com/challenges/luck-balance/problem
 *
 * @param k
 * @param contests
 */
export function luckBalance(k, contests) {
    var luckRait = 0;
    var prevContest = 0;

    contests.forEach(element => {
        if (element[1] === prevContest) {
            luckRait += element[0];
        }
    });
    console.log(contests);
    contests = contests.filter(function (element) {
        if (element[1] === prevContest) {
            return false;
        } else {
            return true;
        }
    });
    console.log(contests);
    contests = contests.sort((a1, b1) => b1[0] - a1[0]);
    console.log(contests);
    console.log(luckRait);
    contests.forEach(function (element) {
        if (k > 0) {
            k--;
            luckRait += element[0];
        } else {
            luckRait -= element[0];
        }
    });
    console.log('luckRait: ' + luckRait);
    return luckRait;
}