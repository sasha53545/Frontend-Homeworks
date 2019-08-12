/**
 * https://www.hackerrank.com/challenges/ctci-making-anagrams/problem
 *
 * @param a
 * @param b
 * @return {number}
 */
export function makeAnagram(a, b) {
    a = a.split('');
    console.log(a);

    b = b.split('');
    console.log(b);

   let array1 = [];
   let array2 = [];
   let obj1 = {};
   let obj2 = {};
   let current = 0;

   a.forEach(element => {
      if (b.indexOf(element) >= 0) {
         return 0;
      } else {
         current++;
      }   
   });


   b.forEach(element => {
      if (a.indexOf(element) >= 0) {
         return 0;
      } else {
         current++;
      }   
   });
   a.forEach(element => {
      if (!obj1[element]) {
         obj1[element] = 1;
      } else {
         obj1[element]++;
      }
   });
   console.log(obj1);

   b.forEach(element => {
      if (!obj2[element]) {
         obj2[element] = 1;
      } else {
         obj2[element]++;
      }
   });
   console.log(obj2);

   for (let key in obj1) {
      let sum = 0;
      if (obj1[key] < obj2[key]) {
         sum = obj2[key] - obj1[key];
         current = current + sum;
      } else if (obj1[key] > obj2[key]) {
         sum = obj1[key] - obj2[key];
         current = current + sum;
      }
   }


   console.log(current);
   return current;
}
