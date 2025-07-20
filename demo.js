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

// Word wrapping example
console.log('\nWith Word Wrapping (Long Text):');
const longTextData = {
  headers: ['Name', 'Description', 'Role'],
  rows: [
    ['Alice', 'This is a very long description that demonstrates word wrapping functionality', 'Engineer'],
    ['Bob', 'Another long description that shows how text wraps within column boundaries', 'Designer'],
    ['Charlie', 'Short description', 'Manager']
  ]
};

console.log(generateAsciiTable(longTextData, { 
  style: 'rounded', 
  maxColumnWidth: 25,
  wrapWords: true 
})); 