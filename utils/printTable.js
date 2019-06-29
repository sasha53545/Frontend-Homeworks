export function printTable(table) {
    const columnWidths = countColumnWidths(table);

    console.log('+' + columnWidths.map(width => multiplyString('-', width)).join('+') + '+');

    table.forEach(row => {
        printLine(row.map(toStr).map((item, index) => extendStringToLength(item, columnWidths[index])));
    });

    console.log('+' + columnWidths.map(width => multiplyString('-', width)).join('+') + '+');
}

function countColumnWidths(table) {
    const sizes = [];
    for (let i = 0; i < table[0].length; i++) {
        sizes.push(0);
    }

    table.forEach((row) => {
        row.forEach((item, index) => {
            sizes[index] = Math.max(sizes[index], ('' + item).length);
        });
    });

    return sizes;
}

function printLine(row) {
    console.log('|' + row.join('|') + '|')
}

function extendStringToLength(str, length) {
    return multiplyString(' ', length - str.length) + str;
}

function toStr(item) {
    return '' + item;
}

function multiplyString(str, count) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += str;
    }
    return result;
}