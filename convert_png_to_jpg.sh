#!/bin/bash

# sudo apt install imagemagick # install if needed

# Check if a directory path is provided as a command line argument
if [ $# -eq 0 ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi

# Get the directory path from the command line argument
directory="$1"

# Check if the specified directory exists
if [ ! -d "$directory" ]; then
    echo "Error: Directory '$directory' does not exist."
    exit 1
fi

# Use a for loop to iterate through the files
for file in "$directory"/*.jpg "$directory"/*.png "$directory"/*.jpeg; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        echo "File found: $filename"

        # Check if the filename contains ".png" and rename if necessary
        if [[ $filename == *".png"* ]]; then
            new_filename="${filename/.png/.jpg}"
            mv "$file" "$directory/$new_filename"

            # Convert png to jpg
            convert $filename $new_filename
            rm $filename # remove the original png file cause convert creates a new file
            echo "Converted => $new_filename"
        fi
    fi
done
