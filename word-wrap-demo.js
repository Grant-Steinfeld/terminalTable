/**
 * Word Wrap Demo - ASCII Table Generator
 * 
 * This demonstrates the word wrapping functionality for handling long text
 * that might cause issues on low-resolution monitors.
 */

import { generateAsciiTable } from './asciiTable.js';

console.log('=== Word Wrap Demo - ASCII Table Generator ===\n');

// Example 1: Long text without word wrapping (character-based)
console.log('1. Long Text with Character-based Wrapping:');
const longTextData = {
  headers: ['Name', 'Description', 'Status'],
  rows: [
    ['Alice', 'This is a very long description that contains many words and should be wrapped to fit within the column width', 'Active'],
    ['Bob', 'Another extremely long description that demonstrates how the word wrapping functionality works with different text lengths', 'Inactive'],
    ['Charlie', 'Short description', 'Pending']
  ]
};

console.log(generateAsciiTable(longTextData, { 
  style: 'rounded', 
  maxColumnWidth: 30,
  wrapWords: false 
}));
console.log('\n');

// Example 2: Long text with word wrapping
console.log('2. Long Text with Word-based Wrapping:');
console.log(generateAsciiTable(longTextData, { 
  style: 'double', 
  maxColumnWidth: 30,
  wrapWords: true 
}));
console.log('\n');

// Example 3: Very long single words
console.log('3. Very Long Single Words:');
const longWordData = {
  headers: ['ID', 'Long Word', 'Category'],
  rows: [
    ['001', 'supercalifragilisticexpialidocious', 'English'],
    ['002', 'pneumonoultramicroscopicsilicovolcanoconioses', 'Medical'],
    ['003', 'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch', 'Welsh']
  ]
};

console.log(generateAsciiTable(longWordData, { 
  style: 'simple', 
  maxColumnWidth: 25,
  wrapWords: true 
}));
console.log('\n');

// Example 4: Mixed content with different column widths
console.log('4. Mixed Content with Different Column Widths:');
const mixedData = {
  headers: ['Short', 'Medium Length Column', 'Very Long Column Header'],
  rows: [
    ['A', 'This is a medium length text that should wrap nicely', 'This is a very long piece of text that will wrap to multiple lines and demonstrate the word wrapping functionality'],
    ['B', 'Another medium text', 'Another extremely long text entry that demonstrates column width calculation and word wrapping capabilities'],
    ['C', 'Short', 'Short text']
  ]
};

console.log(generateAsciiTable(mixedData, { 
  style: 'rounded', 
  maxColumnWidth: 35,
  wrapWords: true 
}));
console.log('\n');

// Example 5: Low resolution monitor simulation (narrow columns)
console.log('5. Low Resolution Monitor Simulation (Narrow Columns):');
const narrowData = {
  headers: ['Name', 'Description', 'Status'],
  rows: [
    ['Alice Johnson', 'This is a very long description that would cause issues on low resolution monitors without word wrapping', 'Active'],
    ['Bob Smith', 'Another long description that demonstrates the importance of word wrapping for readability', 'Inactive'],
    ['Charlie Brown', 'Short name', 'Pending']
  ]
};

console.log(generateAsciiTable(narrowData, { 
  style: 'simple', 
  maxColumnWidth: 15,
  wrapWords: true 
}));
console.log('\n');

// Example 6: Comparison - with and without word wrapping
console.log('6. Comparison - Word Wrapping vs No Wrapping:');
const comparisonData = {
  headers: ['Feature', 'Description'],
  rows: [
    ['Word Wrapping', 'Automatically wraps long text at word boundaries to fit within column width'],
    ['Character Wrapping', 'Wraps text at character boundaries, may break words in the middle'],
    ['No Wrapping', 'Text extends beyond column boundaries, may cause display issues']
  ]
};

console.log('With Word Wrapping:');
console.log(generateAsciiTable(comparisonData, { 
  style: 'double', 
  maxColumnWidth: 40,
  wrapWords: true 
}));
console.log('\n');

console.log('Without Word Wrapping (Character-based):');
console.log(generateAsciiTable(comparisonData, { 
  style: 'double', 
  maxColumnWidth: 40,
  wrapWords: false 
}));
console.log('\n');

// Example 7: Performance test with word wrapping
console.log('7. Performance Test with Word Wrapping:');
const startTime = performance.now();

const performanceData = {
  headers: ['ID', 'Long Description', 'Category'],
  rows: Array.from({ length: 50 }, (_, i) => [
    `EMP${String(i + 1).padStart(3, '0')}`,
    `This is a very long description for employee ${i + 1} that contains many words and demonstrates the word wrapping functionality working with large datasets. The text should wrap nicely within the column boundaries.`,
    `Category ${(i % 5) + 1}`
  ])
};

const wrappedTable = generateAsciiTable(performanceData, { 
  style: 'simple', 
  maxColumnWidth: 45,
  wrapWords: true 
});

const endTime = performance.now();
console.log(`Generated table with word wrapping in ${(endTime - startTime).toFixed(2)}ms`);
console.log(`Table length: ${wrappedTable.length} characters`);
console.log(`Rows processed: ${performanceData.rows.length}`);

// Show first few lines of the result
const lines = wrappedTable.split('\n');
console.log('\nFirst 10 lines of the result:');
console.log(lines.slice(0, 10).join('\n'));
console.log('...');

console.log('\n✅ Word wrapping demo completed successfully!');
console.log('\n💡 Benefits of word wrapping:');
console.log('   - Prevents text overflow on low-resolution monitors');
console.log('   - Maintains readability with long text');
console.log('   - Respects word boundaries for better comprehension');
console.log('   - Configurable column width limits');
console.log('   - Supports both word-based and character-based wrapping'); 