/**
 * Debug Library - ASCII Table Generator
 * 
 * This file is specifically designed for debugging the ASCII table generator.
 * It includes various scenarios to test different aspects of the library.
 */

import { 
  generateAsciiTable, 
  createTableFromObjects,
  calculateColumnWidths,
  formatRow,
  createBorder 
} from './asciiTable.js';

console.log('🔍 Starting ASCII Table Generator Debug Session...\n');

// Debug Scenario 1: Test column width calculation
console.log('=== Debug Scenario 1: Column Width Calculation ===');
const headers = ['Name', 'Age', 'City'];
const rows = [
  ['Alice', '25', 'New York'],
  ['Bob', '30', 'Los Angeles'],
  ['Charlie', '35', 'Chicago']
];

const widths = calculateColumnWidths(headers, rows);
console.log('Headers:', headers);
console.log('Rows:', rows);
console.log('Calculated widths:', widths);
console.log('Expected widths: [7, 3, 11]');
console.log('Widths match:', JSON.stringify(widths) === '[7,3,11]');
console.log();

// Debug Scenario 2: Test border creation
console.log('=== Debug Scenario 2: Border Creation ===');
const border = createBorder(widths, '+', '-', '+', '+');
console.log('Border created:', border);
console.log('Border length:', border.length);
console.log();

// Debug Scenario 3: Test row formatting
console.log('=== Debug Scenario 3: Row Formatting ===');
const formattedRow = formatRow(['Alice', '25', 'New York'], widths, '|', '|', '|');
console.log('Formatted row:', formattedRow);
console.log('Row length:', formattedRow.length);
console.log();

// Debug Scenario 4: Test basic table generation
console.log('=== Debug Scenario 4: Basic Table Generation ===');
const tableData = { headers, rows };
const table = generateAsciiTable(tableData);
console.log('Generated table:');
console.log(table);
console.log();

// Debug Scenario 5: Test different styles
console.log('=== Debug Scenario 5: Different Styles ===');
const simpleTable = generateAsciiTable(tableData, { style: 'simple' });
const doubleTable = generateAsciiTable(tableData, { style: 'double' });
const roundedTable = generateAsciiTable(tableData, { style: 'rounded' });

console.log('Simple style contains "+":', simpleTable.includes('+'));
console.log('Double style contains "╔":', doubleTable.includes('╔'));
console.log('Rounded style contains "╭":', roundedTable.includes('╭'));
console.log();

// Debug Scenario 6: Test object-to-table conversion
console.log('=== Debug Scenario 6: Object to Table Conversion ===');
const userData = [
  { id: 1, name: 'Alice', city: 'Seattle' },
  { id: 2, name: 'Bob', city: 'Austin' }
];

const columns = [
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name' },
  { key: 'city', title: 'City' }
];

const objectTable = createTableFromObjects(userData, columns);
console.log('Object data:', userData);
console.log('Column definitions:', columns);
console.log('Generated table:');
console.log(objectTable);
console.log();

// Debug Scenario 7: Test edge cases
console.log('=== Debug Scenario 7: Edge Cases ===');

// Empty table
const emptyTable = generateAsciiTable({ headers: [], rows: [] });
console.log('Empty table result:', emptyTable === '' ? 'Empty string (correct)' : 'Non-empty (incorrect)');

// Table with null values
const nullData = {
  headers: ['Name', 'Value'],
  rows: [
    ['Alice', null],
    ['Bob', undefined]
  ]
};
const nullTable = generateAsciiTable(nullData);
console.log('Table with null values:');
console.log(nullTable);
console.log();

// Debug Scenario 8: Performance test
console.log('=== Debug Scenario 8: Performance Test ===');
const startTime = performance.now();

// Generate a large table
const largeHeaders = ['ID', 'Name', 'Department', 'Salary', 'Start Date'];
const largeRows = Array.from({ length: 100 }, (_, i) => [
  `EMP${String(i + 1).padStart(3, '0')}`,
  `Employee ${i + 1}`,
  `Dept ${(i % 5) + 1}`,
  `$${50000 + (i * 1000)}`,
  `2023-${String((i % 12) + 1).padStart(2, '0')}-01`
]);

const largeTableData = { headers: largeHeaders, rows: largeRows };
const largeTable = generateAsciiTable(largeTableData);

const endTime = performance.now();
console.log(`Large table generation took ${(endTime - startTime).toFixed(2)}ms`);
console.log(`Table length: ${largeTable.length} characters`);
console.log(`Rows processed: ${largeRows.length}`);
console.log();

console.log('✅ Debug session completed successfully!');
console.log('\n💡 Tips for debugging:');
console.log('   - Set breakpoints in asciiTable.js functions');
console.log('   - Use the debug console to inspect variables');
console.log('   - Try different data structures and edge cases');
console.log('   - Check the call stack to understand function flow'); 