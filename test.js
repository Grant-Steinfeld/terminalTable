/**
 * Tests for the Dynamic ASCII Table Generator
 * Using Node's built-in assert function
 */

const assert = require('assert');
const { 
  generateAsciiTable, 
  createTableFromObjects, 
  calculateColumnWidths,
  formatRow,
  createBorder 
} = require('./asciiTable.js');

console.log('Running tests for ASCII Table Generator...\n');

// Test 1: calculateColumnWidths function
console.log('Test 1: calculateColumnWidths');
const headers = ['Name', 'Age', 'City'];
const rows = [
  ['Alice', '25', 'New York'],
  ['Bob', '30', 'Los Angeles'],
  ['Charlie', '35', 'Chicago']
];

const widths = calculateColumnWidths(headers, rows);
assert.deepStrictEqual(widths, [7, 3, 11], 'Column widths should be calculated correctly');
console.log('✓ calculateColumnWidths passed');

// Test 2: createBorder function
console.log('Test 2: createBorder');
const border = createBorder([7, 3, 11], '+', '-', '+', '+');
const expectedBorder = '+---------+-----+-------------+';
assert.strictEqual(border, expectedBorder, 'Border should be created correctly');
console.log('✓ createBorder passed');

// Test 3: formatRow function
console.log('Test 3: formatRow');
const formattedRow = formatRow(['Alice', '25', 'New York'], [7, 3, 11], '|', '|', '|');
const expectedRow = '| Alice   | 25  | New York    |';
assert.strictEqual(formattedRow, expectedRow, 'Row should be formatted correctly');
console.log('✓ formatRow passed');

// Test 4: Basic table generation
console.log('Test 4: Basic table generation');
const tableData = { headers, rows };
const table = generateAsciiTable(tableData);
assert(table.includes('Alice'), 'Table should contain data');
assert(table.includes('Name'), 'Table should contain headers');
assert(table.includes('+'), 'Table should have borders');
console.log('✓ Basic table generation passed');

// Test 5: Table with different styles
console.log('Test 5: Table styles');
const simpleTable = generateAsciiTable(tableData, { style: 'simple' });
const doubleTable = generateAsciiTable(tableData, { style: 'double' });
const roundedTable = generateAsciiTable(tableData, { style: 'rounded' });

assert(simpleTable.includes('+'), 'Simple style should use + characters');
assert(doubleTable.includes('╔'), 'Double style should use double border characters');
assert(roundedTable.includes('╭'), 'Rounded style should use rounded border characters');
console.log('✓ Table styles passed');

// Test 6: Table without borders
console.log('Test 6: Table without borders');
const noBorderTable = generateAsciiTable(tableData, { showBorders: false });
assert(!noBorderTable.includes('+'), 'Table without borders should not contain border characters');
assert(noBorderTable.includes('Alice'), 'Table should still contain data');
console.log('✓ Table without borders passed');

// Test 7: Empty table handling
console.log('Test 7: Empty table');
const emptyTable = generateAsciiTable({ headers: [], rows: [] });
assert.strictEqual(emptyTable, '', 'Empty table should return empty string');
console.log('✓ Empty table handling passed');

// Test 8: Table from objects
console.log('Test 8: Table from objects');
const userData = [
  { id: 1, name: 'Alice', role: 'Admin' },
  { id: 2, name: 'Bob', role: 'User' }
];

const columns = [
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' }
];

const objectTable = createTableFromObjects(userData, columns);
assert(objectTable.includes('Alice'), 'Object table should contain data');
assert(objectTable.includes('ID'), 'Object table should contain headers');
console.log('✓ Table from objects passed');

// Test 9: Mixed data types
console.log('Test 9: Mixed data types');
const mixedData = {
  headers: ['String', 'Number', 'Boolean', 'Null'],
  rows: [
    ['Text', 42, true, null],
    ['More text', 3.14, false, null]
  ]
};

const mixedTable = generateAsciiTable(mixedData);
assert(mixedTable.includes('42'), 'Table should handle numbers');
assert(mixedTable.includes('true'), 'Table should handle booleans');
// Note: null values are converted to empty strings, so we check for proper spacing instead
assert(mixedTable.includes('|      |'), 'Table should handle null values as empty strings');
console.log('✓ Mixed data types passed');

// Test 10: Long content handling
console.log('Test 10: Long content');
const longData = {
  headers: ['Short', 'Very Long Header'],
  rows: [
    ['A', 'This is a very long piece of text'],
    ['B', 'Another long text entry']
  ]
};

const longTable = generateAsciiTable(longData);
const lines = longTable.split('\n');
const headerLine = lines.find(line => line.includes('Very Long Header'));
assert(headerLine, 'Table should handle long headers');
console.log('✓ Long content handling passed');

console.log('\n🎉 All tests passed successfully!');
console.log('\nYou can run the examples with: node example.js'); 