const fs = require("fs");
const path = require("path");

function renameFilesWithCapitalizedNames(directoryPath) {
  // Array to store the renamed filenames
  const renamedFilenames = [];

  // Read the directory
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    // Iterate over each file in the directory
    files.forEach((filename) => {
      // Get the full path of the file
      const filePath = path.join(directoryPath, filename);

      // Check if the file is the index.ts file
      if (filename === "index.ts") {
        // Remove the index.ts file
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error(`Error removing index.ts file:`, err);
          } else {
            console.log(`Removed index.ts file`);
          }
        });
      } else {
        // Check if the file is a directory
        fs.stat(filePath, (err, stats) => {
          if (err) {
            console.error(`Error accessing ${filePath}:`, err);
            return;
          }

          if (stats.isDirectory()) {
            // Recursively rename files in subdirectories
            renameFilesWithCapitalizedNames(filePath);
          } else {
            // Extract the file extension
            const fileExt = path.extname(filename);

            // Capitalize the first letter of the filename
            const newFilename = `${filename.charAt(0).toUpperCase()}${filename.slice(1)}`;

            // Get the full path of the new file
            const newFilePath = path.join(directoryPath, newFilename);

            // Rename the file
            fs.rename(filePath, newFilePath, (err) => {
              if (err) {
                console.error(`Error renaming ${filename}:`, err);
              } else {
                console.log(`Renamed ${filename} to ${newFilename}`);
                // Add the renamed filename to the array
                renamedFilenames.push(newFilename);
              }
            });
          }
        });
      }
    });
  });

  // Export the renamed filenames after renaming completes
  const outputDirectory = path.join(__dirname, "renamedFilenames.json");
  fs.writeFile(
    outputDirectory,
    JSON.stringify(renamedFilenames, null, 2),
    (err) => {
      if (err) {
        console.error("Error exporting renamed filenames:", err);
      } else {
        console.log("Renamed filenames exported successfully");
      }
    }
  );
}

const directoryPath = path.join(__dirname, "../svgs");
renameFilesWithCapitalizedNames(directoryPath);
