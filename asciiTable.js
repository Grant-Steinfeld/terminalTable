/**
 * Dynamic ASCII Table Generator
 * A functional program that creates formatted ASCII tables from JSON data
 */

/**
 * Calculates the maximum width needed for each column
 * @param {Array} headers - Array of header strings
 * @param {Array} rows - Array of row arrays
 * @returns {Array} Array of column widths
 */
const calculateColumnWidths = (headers, rows) => {
  const allRows = [headers, ...rows];
  return headers.map((_, columnIndex) => {
    return Math.max(
      ...allRows.map(row => {
        const cell = String(row[columnIndex] === null || row[columnIndex] === undefined ? '' : row[columnIndex]);
        return cell.length;
      })
    );
  });
};

/**
 * Creates a horizontal border line
 * @param {Array} columnWidths - Array of column widths
 * @param {string} left - Left border character
 * @param {string} middle - Middle border character
 * @param {string} right - Right border character
 * @param {string} separator - Column separator character
 * @returns {string} Formatted border line
 */
const createBorder = (columnWidths, left, middle, right, separator) => {
  const borderCells = columnWidths.map(width => middle.repeat(width + 2));
  return left + borderCells.join(separator) + right;
};

/**
 * Formats a single row of data
 * @param {Array} row - Array of cell values
 * @param {Array} columnWidths - Array of column widths
 * @param {string} left - Left border character
 * @param {string} right - Right border character
 * @param {string} separator - Column separator character
 * @returns {string} Formatted row string
 */
const formatRow = (row, columnWidths, left, right, separator) => {
  const formattedCells = row.map((cell, index) => {
    const cellStr = String(cell === null || cell === undefined ? '' : cell);
    const padding = ' '.repeat(columnWidths[index] - cellStr.length);
    return ` ${cellStr}${padding} `;
  });
  return left + formattedCells.join(separator) + right;
};

/**
 * Generates a complete ASCII table from JSON data
 * @param {Object} tableData - Object containing headers and rows
 * @param {Array} tableData.headers - Array of header strings
 * @param {Array} tableData.rows - Array of row arrays
 * @param {Object} options - Optional formatting options
 * @param {string} options.style - Table style ('simple', 'double', 'rounded')
 * @param {boolean} options.showBorders - Whether to show borders (default: true)
 * @returns {string} Formatted ASCII table string
 */
const generateAsciiTable = (tableData, options = {}) => {
  const { headers = [], rows = [] } = tableData;
  const { style = 'simple', showBorders = true } = options;
  
  if (!headers.length) {
    return '';
  }
  
  // Define border characters based on style
  const borderStyles = {
    simple: {
      topLeft: '+', topMiddle: '+', topRight: '+',
      middleLeft: '+', middleMiddle: '+', middleRight: '+',
      bottomLeft: '+', bottomMiddle: '+', bottomRight: '+',
      horizontal: '-', vertical: '|'
    },
    double: {
      topLeft: '╔', topMiddle: '╦', topRight: '╗',
      middleLeft: '╠', middleMiddle: '╬', middleRight: '╣',
      bottomLeft: '╚', bottomMiddle: '╩', bottomRight: '╝',
      horizontal: '═', vertical: '║'
    },
    rounded: {
      topLeft: '╭', topMiddle: '┬', topRight: '╮',
      middleLeft: '├', middleMiddle: '┼', middleRight: '┤',
      bottomLeft: '╰', bottomMiddle: '┴', bottomRight: '╯',
      horizontal: '─', vertical: '│'
    }
  };
  
  const borders = borderStyles[style] || borderStyles.simple;
  
  // Calculate column widths
  const columnWidths = calculateColumnWidths(headers, rows);
  
  // Build table lines
  const lines = [];
  
  if (showBorders) {
    // Top border
    lines.push(createBorder(
      columnWidths,
      borders.topLeft,
      borders.horizontal,
      borders.topRight,
      borders.topMiddle
    ));
  }
  
  // Headers
  lines.push(formatRow(headers, columnWidths, borders.vertical, borders.vertical, borders.vertical));
  
  if (showBorders && rows.length > 0) {
    // Separator line between headers and data
    lines.push(createBorder(
      columnWidths,
      borders.middleLeft,
      borders.horizontal,
      borders.middleRight,
      borders.middleMiddle
    ));
  }
  
  // Data rows
  rows.forEach(row => {
    lines.push(formatRow(row, columnWidths, borders.vertical, borders.vertical, borders.vertical));
  });
  
  if (showBorders) {
    // Bottom border
    lines.push(createBorder(
      columnWidths,
      borders.bottomLeft,
      borders.horizontal,
      borders.bottomRight,
      borders.bottomMiddle
    ));
  }
  
  return lines.join('\n');
};

/**
 * Creates a table from an array of objects
 * @param {Array} data - Array of objects
 * @param {Array} columns - Array of column definitions with key and title
 * @param {Object} options - Table formatting options
 * @returns {string} Formatted ASCII table string
 */
const createTableFromObjects = (data, columns, options = {}) => {
  const headers = columns.map(col => col.title || col.key);
  const rows = data.map(obj => 
    columns.map(col => obj[col.key] || '')
  );
  
  return generateAsciiTable({ headers, rows }, options);
};

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    generateAsciiTable,
    createTableFromObjects,
    calculateColumnWidths,
    formatRow,
    createBorder
  };
} 