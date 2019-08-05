import constObject, {
    addFieldToObject,
    createAddFunction,
    createArray,
    createSumFunction, elementsSum, getNames,
    getType, justPositive,
    maxElement} from './types';

describe('getType', () => {
    it('getType: number', () => {
        expect(getType(1)).toEqual('NUMBER')
    });

    it('getType: number 2', () => {
        expect(getType(NaN)).toEqual('NUMBER')
    });

    it('getType: string 1', () => {
        expect(getType("Hallo!")).toEqual('STRING')
    });

    it('getType: string 2', () => {
        expect(getType([] + [])).toEqual('STRING') //A little bit magic
    });

    it('getType: object 1', () => {
        expect(getType({key: 'value'})).toEqual('OBJECT')
    });

    it('getType: object 2', () => {
        expect(getType([])).toEqual('OBJECT')
    });

    it('getType: boolean 1', () => {
        expect(getType(true)).toEqual('BOOLEAN')
    });

    it('getType: boolean 2', () => {
        expect(getType("Hallo" === "World")).toEqual('BOOLEAN')
    });

    it('getType: null', () => {
        expect(getType(null)).toEqual('NULL')
    });

    it('getType: undefined', () => {
        expect(getType(undefined)).toEqual('UNDEFINED')
    });
});

describe('constObject', () => {
    expect(constObject()).toEqual({
        hallo: "world",
        "internal-object": {
            number: 10,
            boolean: true,
            "here-is-null": null
        }
    });
});

describe('addFieldToObject', () => {
    const obj = {};
    addFieldToObject(obj, 'a', 20);
    expect(obj)
        .toEqual({a: 20})
});

describe('createSumFunction', () => {
    it('test 1', () => {
        const func = createSumFunction();
        expect(func(1, 3))
            .toEqual(4);
    })

    it('test 2', () => {
        const func = createSumFunction();
        expect(func("hallo", "world"))
            .toEqual("halloworld");
    })
});

describe('createAddFunction', () => {
    it('test 1', () => {
        const func = createAddFunction(5);

        expect(func(20)).toEqual(25);
    });

    it('test 2', () => {
        const func = createAddFunction("external_argument");

        expect(func("internal_argument")).toEqual("internal_argumentexternal_argument");
    });
});

describe('createArray', () => {
    it('test', () => {
        expect(createArray(5, "string")).toEqual([5, "string"]);
    });
});

describe('maxElement', () => {
    it('test 1', () => {
        expect(maxElement([1, 2, 3, 1000, 4, 5])).toEqual(1000);
    });

    it('empty array', () => {
        expect(maxElement([])).toEqual(undefined);
    });

    it('zero and negative numbers', () => {
        expect(maxElement([-1, -2, 0, -5, -8])).toEqual(0);
    })
});

describe('justPositive', () => {
    it('test 1', () => {
        expect(justPositive([0, 1, -1, 2, -2, 3, -3])).toEqual([0, 1, 2, 3]);
    });

    it('test 2', () => {
        expect(justPositive(["hallo", null, undefined, true, 5, 5.5, [], {}]))
            .toEqual([5, 5.5]);
    });
});

describe('getNames', () => {
    it('test', () => {
        expect(getNames([
            {name: '1', age: 10, gender: 'male'},
            {name: '2', age: 20, gender: 'female'},
            {name: '3', age: 30, gender: 'male'},
            {name: '4', age: 40, gender: 'female'}
        ]))
            .toEqual(['1', '2', '3', '4']);
    });
});

describe('elementsSum', () => {
    it('test', () => {
        expect(elementsSum([1, 2, 3, 4, 5])).toEqual(15);
    });
});
