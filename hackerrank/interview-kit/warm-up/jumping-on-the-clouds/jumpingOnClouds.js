/**
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds
 *
 * @param c
 */
export function jumpingOnClouds(c) {
   var jumps = 0;
    for (var i = 0; i < c.length; i++) {
        if ((c[i] == c[i+1]) && (c[i+1] == c[i+2])) {
            jumps++; 
            i += 1;  // i = i + 1
        } else {
            if (c[i] == c[i+1]) {
                jumps++;
            } else {
                if (c[i] == 1) {
                    jumps++;
                }
            }
        }
    }
    console.log(jumps);
    return jumps; 
}