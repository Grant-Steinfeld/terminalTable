# Dynamic ASCII Table Generator

A functional JavaScript program that creates beautiful, formatted ASCII tables from JSON data. This library provides a clean, modular approach to generating tables with various styling options and supports both simple arrays and complex object structures.

## Features

- 🎨 **Multiple Border Styles**: Simple, double, and rounded border options
- 📊 **Dynamic Column Sizing**: Automatically calculates optimal column widths
- 🔧 **Flexible Data Input**: Supports both array-based and object-based data
- 🎯 **Pure Functions**: Built with functional programming principles
- 🧪 **Comprehensive Testing**: Full test coverage using Node's built-in assert
- 📦 **No Dependencies**: Zero external dependencies required

## Quick Start

### Basic Usage

```javascript
const { generateAsciiTable } = require('./asciiTable.js');

const data = {
  headers: ['Name', 'Age', 'City'],
  rows: [
    ['Alice', '25', 'New York'],
    ['Bob', '30', 'Los Angeles'],
    ['Charlie', '35', 'Chicago']
  ]
};

const table = generateAsciiTable(data);
console.log(table);
```

Output:
```
+---------+-----+-------------+
| Name    | Age | City        |
+---------+-----+-------------+
| Alice   | 25  | New York    |
| Bob     | 30  | Los Angeles |
| Charlie | 35  | Chicago     |
+---------+-----+-------------+
```

### From Array of Objects

```javascript
const { createTableFromObjects } = require('./asciiTable.js');

const users = [
  { id: 1, name: 'Alice', role: 'Admin' },
  { id: 2, name: 'Bob', role: 'User' }
];

const columns = [
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' }
];

const table = createTableFromObjects(users, columns);
console.log(table);
```

## API Reference

### `generateAsciiTable(tableData, options)`

Generates an ASCII table from structured data.

**Parameters:**
- `tableData` (Object): The table data
  - `headers` (Array): Array of header strings
  - `rows` (Array): Array of row arrays
- `options` (Object, optional): Formatting options
  - `style` (String): Border style - 'simple', 'double', or 'rounded' (default: 'simple')
  - `showBorders` (Boolean): Whether to show borders (default: true)

**Returns:** String - The formatted ASCII table

### `createTableFromObjects(data, columns, options)`

Creates a table from an array of objects.

**Parameters:**
- `data` (Array): Array of objects
- `columns` (Array): Column definitions with `key` and `title` properties
- `options` (Object, optional): Same as `generateAsciiTable`

**Returns:** String - The formatted ASCII table

### Utility Functions

- `calculateColumnWidths(headers, rows)` - Calculates optimal column widths
- `formatRow(row, columnWidths, left, right, separator)` - Formats a single row
- `createBorder(columnWidths, left, middle, right, separator)` - Creates border lines

## Border Styles

### Simple Style (Default)
```
+---------+-----+-------------+
| Name    | Age | City        |
+---------+-----+-------------+
| Alice   | 25  | New York    |
+---------+-----+-------------+
```

### Double Style
```
╔═════════╦═════╦═════════════╗
║ Name    ║ Age ║ City        ║
╠═════════╬═════╬═════════════╣
║ Alice   ║ 25  ║ New York    ║
╚═════════╩═════╩═════════════╝
```

### Rounded Style
```
╭─────────┬─────┬─────────────╮
│ Name    │ Age │ City        │
├─────────┼─────┼─────────────┤
│ Alice   │ 25  │ New York    │
╰─────────┴─────┴─────────────╯
```

## Examples

### Mixed Data Types
```javascript
const mixedData = {
  headers: ['Product', 'Price', 'In Stock', 'Rating'],
  rows: [
    ['Laptop', '$999.99', true, 4.5],
    ['Mouse', '$29.99', false, 4.2]
  ]
};

console.log(generateAsciiTable(mixedData, { style: 'rounded' }));
```

### No Borders
```javascript
console.log(generateAsciiTable(data, { showBorders: false }));
```

### Complex Object Transformation
```javascript
const complexData = [
  {
    user: { firstName: 'Alice', lastName: 'Johnson' },
    stats: { posts: 42, followers: 1234 }
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
  }
];

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

console.log(createComplexTable(complexData, complexColumns));
```

## Running the Examples

```bash
# Run the example demonstrations
node example.js

# Run the test suite
node test.js
```

## Features in Detail

### Automatic Column Width Calculation
The library automatically calculates the optimal width for each column based on the content of headers and all rows, ensuring consistent formatting.

### Flexible Data Handling
- Supports strings, numbers, booleans, and null values
- Handles missing data gracefully (converts to empty strings)
- Works with nested object structures through custom transformations

### Border Customization
- Three built-in border styles for different aesthetic preferences
- Option to disable borders entirely for minimal output
- Consistent spacing and alignment across all styles

### Functional Design
- Pure functions with no side effects
- Immutable data handling
- Composable utility functions for custom implementations

## Error Handling

The library handles various edge cases gracefully:
- Empty tables return empty strings
- Missing data is converted to empty strings
- Invalid styles fall back to simple style
- Malformed data structures are handled safely

## Performance

The library is optimized for:
- Minimal memory usage through functional programming
- Fast column width calculations
- Efficient string concatenation
- No external dependencies

## Browser Support

For browser usage, simply remove the Node.js export section and use the functions directly:

```javascript
// Remove this section for browser use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ... };
}
```

## Contributing

This is a functional programming implementation focused on:
- Pure functions
- Immutability
- Composability
- Testability

Feel free to extend the functionality while maintaining these principles! 