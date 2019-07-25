import * as collections from './collections';

describe('collections.map', () => {
    it('test 1', () => {
        expect(collections.map(
            [1, 2, 3, 4, 5],
            (a => a * 2))
        )
            .toEqual([2, 4, 6, 8, 10]);
    });

    it('test 2', () => {
        expect(collections.map(
            [{name: 'test1'}, {name: 'test2'}, {name: 'test3'}],
            (user => user.name))
        )
            .toEqual(['test1', 'test2', 'test3']);
    });

    it('test3', () => {
        expect(collections.map(
            [{name: 'test1'}, {name: 'test2'}, {name: 'test3'}],
            ((user, index) => ({...user, position: index})))
        )
            .toEqual([{name: 'test1', position: 0},
                {name: 'test2', position: 1},
                {name: 'test3', position: 2}]);
    });
});

describe('collections.filter', () => {
    it('test 1', () => {
        expect(collections.filter(
            [-3, -2, -1, 0, 1, 2, 3],
            (a => a > 0))
        )
            .toEqual([1, 2, 3]);
    });

    it('test 2', () => {
        expect(collections.filter(
            [{name: 'test1', age: 10}, {name: 'test2', age: 20}, {name: 'test3', age: 30}],
            (user => user.age > 15))
        )
            .toEqual([{name: 'test2', age: 20}, {name: 'test3', age: 30}]);
    });

    it('test3', () => {
        expect(collections.filter(
            [null, 0, false, '', 'correct input'],
            ((item) => !!item))
        )
            .toEqual(['correct input']);
    });
});

describe('collections.reduce', () => {
    it('test 1', () => {
        expect(collections.reduce(
            [-5, -3, -2, -1, 0, 1, 2, 3, 4],
            (collector, item) => collector + item,
            0))
            .toEqual(-1);
    });

    it('test 2', () => {
        const obj = {
            field1: 1,
            field2: 2,
            field3: 3,
            field4: 4,
            field5: 5,
        };
        expect(collections.reduce(
            ['field1', 'field3'],
            ((collector, key) => {
                collector[key] = obj[key];
                return collector;
            }),
            {}),
        )
            .toEqual({'field1': 1, 'field3': 3});
    });

    it('test3', () => {
        expect(collections.reduce(
            ['val1', 'val2', 'val3'],
            ((collector, item, index) => {
                collector[index] = item;
                return collector;
            }),
            {})
        )
            .toEqual({'0': 'val1', '1': 'val2', '2': 'val3'});
    });
});

describe('collections.map-reduce-filter', () => {
    it('test 1', () => {
        const arr = [
            {id: 1, title: 'test1', price: 10,},
            {id: 2, title: 'test2', price: 30},
            {id: 3, title: 'test3', price: 40},
            {id: 4, title: 'test4', price: 45},
            {id: 5, title: 'test5', price: 48},
        ];

        // count average price
        const averagePrice = Math.round(
            collections.reduce(arr, (c, i) => c += i.price, 0) / arr.length
        );

        // take just items with price higher average
        const filtered = collections.filter(arr, item => item.price > averagePrice);

        // apply discount for them
        const withDiscount = collections.map(filtered, item => ({
            ...item,
            price: Math.round((item.price + averagePrice) / 2)
        }));

        // normalize result by id
        const normalized = collections.reduce(withDiscount, (collector, item) => {
            collector[item.id] = item;
            return collector;
        }, {});

        expect(normalized)
            .toEqual({
                '3': {id: 3, price: 38, title: 'test3'},
                '4': {id: 4, price: 40, title: 'test4'},
                '5': {id: 5, price: 42, title: 'test5'}
            });
    });
});