/**
 * Example usage of the Dynamic ASCII Table Generator
 */

// Import the table generator functions
import { generateAsciiTable, createTableFromObjects } from './asciiTable.js';

console.log('=== Dynamic ASCII Table Generator Examples ===\n');

// Example 1: Simple table with basic data
console.log('1. Simple Table:');
const simpleData = {
  headers: ['Name', 'Age', 'City'],
  rows: [
    ['Alice', '25', 'New York'],
    ['Bob', '30', 'Los Angeles'],
    ['Charlie', '35', 'Chicago']
  ]
};

console.log(generateAsciiTable(simpleData));
console.log('\n');

// Example 2: Table with different styling
console.log('2. Double Border Style:');
console.log(generateAsciiTable(simpleData, { style: 'double' }));
console.log('\n');

// Example 3: Rounded border style
console.log('3. Rounded Border Style:');
console.log(generateAsciiTable(simpleData, { style: 'rounded' }));
console.log('\n');

// Example 4: Table without borders
console.log('4. No Borders:');
console.log(generateAsciiTable(simpleData, { showBorders: false }));
console.log('\n');

// Example 5: Table from array of objects
console.log('5. Table from Array of Objects:');
const userData = [
  { id: 1, name: 'Alice Johnson', city: 'Seattle', role: 'Admin' },
  { id: 2, name: 'Bob Smith', city: 'Austin', role: 'User' },
  { id: 3, name: 'Charlie Brown', city: 'Denver', role: 'Editor' },
  { id: 4, name: 'Diana Prince', city: 'Portland', role: 'User' }
];

const columns = [
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Full Name' },
  { key: 'city', title: 'City' },
  { key: 'role', title: 'User Role' }
];

console.log(createTableFromObjects(userData, columns, { style: 'double' }));
console.log('\n');

// Example 6: Table with mixed data types
console.log('6. Table with Mixed Data Types:');
const mixedData = {
  headers: ['Product', 'Price', 'In Stock', 'Rating'],
  rows: [
    ['Laptop', '$999.99', true, 4.5],
    ['Mouse', '$29.99', false, 4.2],
    ['Keyboard', '$89.99', true, 4.8],
    ['Monitor', '$299.99', true, 4.6]
  ]
};

console.log(generateAsciiTable(mixedData, { style: 'rounded' }));
console.log('\n');

// Example 7: Large table with many columns
console.log('7. Large Table with Many Columns:');
const largeData = {
  headers: ['ID', 'Name', 'Department', 'Salary', 'Start Date', 'Status'],
  rows: [
    ['001', 'John Doe', 'Engineering', '$75,000', '2023-01-15', 'Active'],
    ['002', 'Jane Smith', 'Marketing', '$65,000', '2023-02-20', 'Active'],
    ['003', 'Mike Johnson', 'Sales', '$70,000', '2023-03-10', 'Inactive'],
    ['004', 'Sarah Wilson', 'HR', '$60,000', '2023-04-05', 'Active'],
    ['005', 'Tom Brown', 'Engineering', '$80,000', '2023-05-12', 'Active']
  ]
};

console.log(generateAsciiTable(largeData, { style: 'simple' }));
console.log('\n');

// Example 8: Empty table handling
console.log('8. Empty Table:');
const emptyData = {
  headers: ['Name', 'Age'],
  rows: []
};

console.log(generateAsciiTable(emptyData));
console.log('\n');

// Example 9: Table with very long content
console.log('9. Table with Long Content:');
const longContentData = {
  headers: ['Short', 'Very Long Column Header', 'Medium'],
  rows: [
    ['A', 'This is a very long piece of text that will wrap to multiple lines', 'Normal'],
    ['B', 'Another extremely long text entry that demonstrates column width calculation', 'Short'],
    ['C', 'Short', 'This is a medium length text entry']
  ]
};

console.log(generateAsciiTable(longContentData, { style: 'double' }));
console.log('\n');

// Example 10: Custom table from complex objects
console.log('10. Complex Object Table:');
const complexData = [
  {
    user: { firstName: 'Alice', lastName: 'Johnson' },
    stats: { posts: 42, followers: 1234, following: 567 },
    lastActive: new Date('2023-12-01').toISOString().split('T')[0]
  },
  {
    user: { firstName: 'Bob', lastName: 'Smith' },
    stats: { posts: 15, followers: 89, following: 234 },
    lastActive: new Date('2023-11-28').toISOString().split('T')[0]
  }
];

const complexColumns = [
  { 
    key: 'user', 
    title: 'User Name',
    transform: (value) => `${value.firstName} ${value.lastName}`
  },
  { 
    key: 'stats', 
    title: 'Posts',
    transform: (value) => value.posts.toString()
  },
  { 
    key: 'stats', 
    title: 'Followers',
    transform: (value) => value.followers.toString()
  },
  { 
    key: 'lastActive', 
    title: 'Last Active'
  }
];

// Custom function to handle complex object transformation
const createComplexTable = (data, columns, options = {}) => {
  const headers = columns.map(col => col.title);
  const rows = data.map(obj => 
    columns.map(col => {
      const value = obj[col.key];
      return col.transform ? col.transform(value) : value;
    })
  );
  
  return generateAsciiTable({ headers, rows }, options);
};

console.log(createComplexTable(complexData, complexColumns, { style: 'rounded' })); 