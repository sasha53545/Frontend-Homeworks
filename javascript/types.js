import { summarizers } from "istanbul-lib-report";

/**
 * You should know that in JavaScript there are 6 types.
 * In this task you can use operator 'typeof' to detect a type.
 * Be careful, in JavaScript there is a bug. Operator 'typeof' works incorrect with null! ^_^ Welcome to JS!
 *
 * this function should return a string depending on the arg:
 * "NUMBER" for a number
 * "STRING" for a string
 * "OBJECT" for a object
 * "BOOLEAN" for a boolean
 * "NULL" for null
 * "UNDEFINED" for undefined
 *
 * @param arg
 */
export function getType(arg) {
    if(typeof(arg) == "string") 
        return 'STRING'
    if(typeof(arg) == "number") 
        return 'NUMBER'
    if(typeof(arg) == "object" && arg != null) 
        return 'OBJECT'
    if(typeof(arg) == "object" && arg == null)
        return 'NULL'  
    if(typeof(arg) == "boolean")
        return 'BOOLEAN'
    if(typeof(arg) == "undefined")
        return 'UNDEFINED'
}

/**
 * Objects in JavaScript might be written in JSON format,
 *
 * Every object is the group of key-value pairs where key is the string and value is the any data (i.e. other object)
 *
 * This method should simply return object:
 * {
 *     hallo: "world",
 *     internal-object: {
 *         number: 10,
 *         boolean: true,
 *         here-is-null: null
 *     }
 * }
 */
export default function constObject() {
    var obj = {
        hallo: "world",
        "internal-object": {
        number: 10,
        boolean: true,
        "here-is-null": null
        }
    };
    return obj;
}

/**
 * You can dynamically add fields to the object
 *
 * For example if you have object:
 * {
 *     a: 10
 * }
 *
 * And then you execute a.b = "new field"
 *
 * The initial object will be change to the:
 * {
 *     a: 10,
 *     b: 'new field'
 * }
 *
 * This method should add new field to the existing object
 *
 * @param obj
 * @param key
 * @param value
 */
export function addFieldToObject(obj, key, value) {
    return obj[key] = value;
}

/**
 * In JavaScript there are two ways to create function:
 *
 * 1) special worf 'function':
 *      function functionName(arg1, arg2) { return result; }
 *      const functionName = function(arg1, arg2) { return result; }
 *
 * 2) Lambda function:
 *      const functionName = (arg1, arg2) => { return result; }
 *      const functionName = (arg1, arg2) => result;
 *
 * About the differences we will speak a little bit later.
 *
 * Everything in JavaScript is the object and might be assigned to variables,
 * used as parameter in function and returned from function
 *
 * This function should return new function of two arguments which will return sum of this arguments
 * smth like (arg1, arg2) => arg1 + arg2
 */
export function createSumFunction() {
    return (arg1,arg2) => arg1 + arg2
}

/**
 * About scopes we will talk a little bit later but you should know
 * that when you create a function, in this function available variable of external function
 *
 * So, in this task you need create a function of one argument
 * that will return a sum of this argument and argument of external function
 *
 * @param value
 */
export function createAddFunction(value) {
    return (arg1) => arg1 + value
}

/**
 * For arrays in JavaScript also commonly used JSON format.
 *
 * In this format array looks like:
 *   [1, 2, 3, 4, 5]
 *
 * In this task you should return array with two elements: arg1, arg2
 *
 * @param arg1
 * @param arg2
 */
export function createArray(arg1, arg2) {
    return [arg1,arg2]
}

/**
 * You can iterate object of array with loops for..in and for..of,
 *
 * But in common situations it is not recommended.
 * Better to use methods of array: forEach, map, filter, redux
 *
 * This function should return maximum number in the array,
 *
 * If you use function forEach, you should know, that this function requires as argument another function
 * which will be called for every element of array.
 *
 * [1, 2, 3, 4, 5].forEach((item, index, array) => {...})
 *
 * Your function will be called with 3 arguments:
 *   item - element of array
 *   index - index of this element in array
 *   array - the whole array.
 *
 * Function should return undefined in the case when we can not find max element
 *
 * @param arr
 */
export function maxElement(arr) {
    var max = arr[0];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

/**
 * This function should return array with non negative numbers (0, 1, 2, ...) of arr
 *
 * I recommend to look at the method map of arrays
 *
 * @param arr
 */
export function justPositive(arr) {   
    var arr2 = [];

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] >= 0 && Number.isInteger(arr[i])) {
            arr2.push(arr[i]);
        }
    }
    console.log(arr2);
    return arr2;
}

/**
 * This function should return the list with names of users
 *
 * Argument users of this function is the list with objects like:
 * {
 *     name: "any name",
 *     ...other fields
 * }
 *
 * And function should return result in format:
 * ["any name", "other name", ...]
 *
 * I recommend to look at the map method
 *
 * @param users
 */
export function getNames(users) {
    var arr = []
    users.forEach(element => {
        arr.push(element.name);
    });
    return arr;
}

/**
 * Function should return sum of the elements of array
 *
 * I recommend to look at the reduce method ^_^ You will like it
 *
 * @param arr
 */
export function elementsSum(arr) {
    var result = arr.reduce(function(sum, current) {
        return sum + current
    });
    return result;
}