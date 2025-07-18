/**
 * Simple Demo - Dynamic ASCII Table Generator
 * 
 * This demonstrates the most basic usage of the ASCII table generator.
 */

import { generateAsciiTable } from './asciiTable.js';

// Your JSON data representing the grid
const gridData = {
  headers: ['Name', 'Age', 'City', 'Occupation'],
  rows: [
    ['Alice', '25', 'New York', 'Engineer'],
    ['Bob', '30', 'Los Angeles', 'Designer'],
    ['Charlie', '35', 'Chicago', 'Manager'],
    ['Diana', '28', 'Boston', 'Developer']
  ]
};

// Generate the ASCII table
const table = generateAsciiTable(gridData);

// Display the result
console.log('Dynamic ASCII Table Generated from JSON:');
console.log(table);

// You can also try different styles
console.log('\nWith Double Border Style:');
console.log(generateAsciiTable(gridData, { style: 'double' }));

console.log('\nWith Rounded Border Style:');
console.log(generateAsciiTable(gridData, { style: 'rounded' })); 