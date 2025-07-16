const fs = require('fs');
const path = require('path');

// Specify the directory you want to list
const directoryPath = '.'; // You can change this to any path, e.g., '/Users/youruser/Documents/my_files'

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  console.log(`Files in directory: ${directoryPath}`);
  files.forEach(file => {
    // You can add conditions here to filter specific files
    // For example, to list only .txt files:
     if (path.extname(file) === '.txt') {
     console.log(file);
     }// else {
    //   console.log(file); // List all files if no specific filter
    // }
    // console.log(file); // This will list all files in the directory
  });
});