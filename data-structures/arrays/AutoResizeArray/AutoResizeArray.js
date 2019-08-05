const INITIAL_SIZE = 15;

const RESIZE_COEFFICIENT = 2;

const RESIZE_TRESHOLD = 1.5;

/**
 * In this task Absolutly! deprecated to use methods push, pop, shift, unshift of JavaScript arrays!
 * You must create array only by function "createArray",
 * and you should not use possibility of standards arrays to resize at all!
 *
 * As you know arrays in many languages are auto resizable like arrays in JavaScript, Python, ArrayList in Java and so on.
 *
 * But not all languages have this possibility from the box (like Java and C for example), and developers have to implement it
 *
 * This class represents auto resizable array.
 * It means that when user of this array adds new elements array should increase internal storage to keep them
 *
 * This array has two properties: size and capacity
 * cize - amount of items that were added by the user
 * capacity - size of internal storage in this class (normally not available for the user)
 *
 * For example, internal storage has INITIAL_SIZE elements and size already (INITIAL_SIZE / RESIZE_TRESHOLD) elements,
 * In this case when user tries to add new element, this class should increase internal storage in RESIZE_COEFFICIENT times
 *
 * The same for pop operation.
 *
 */
export class AutoResizeArray {

    constructor() {
        this.size = 0;
        this.elements = createArray(INITIAL_SIZE);
    }

    /**
     * add element to the end of the array
     * @param item
     */
    push(item) {
 
    }

    /**
     * delete last element from array and return it
     */
    pop() {

    }

    /**
     * add element to the start of the array
     */
    unshift() {

    }

    /**
     * delete first element from array and return it
     * @param item
     */
    shift(item) {

    }

    /**
     * return size of the array
     */
    size() {

    }

    /**
     * return data as a JavaScript array
     * (length of this array should be 'size' of the class entity, not 'capacity')
     */
    asArray() {

    }

    /**
     * add all elements from arr to the this.
     * arr might be JavaScript array or AutoResizeArray class
     * @param arr
     */
    merge(arr) {

    }
}

/**
 * You can use this method to create empty array with certain size
 *
 * @param size
 * @return {any[]}
 */
function createArray(size) {
    return new Array(size);
}