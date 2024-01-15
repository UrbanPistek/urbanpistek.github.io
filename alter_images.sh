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

# Define the threshold size in kilobytes (100KB)
threshold_size=100

# Convert the threshold size to bytes (1KB = 1024 bytes)
threshold_size_bytes=$((threshold_size * 1024))

# Use a for loop to iterate through the files
for file in "$directory"/*.jpg "$directory"/*.png "$directory"/*.jpeg; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        echo "File found: $file"

        # ========== Do name based changes ==========
        # # Check if the filename contains ".png" and rename if necessary
        # if [[ $filename == *"portfolio"* ]]; then
        #     echo "=> $filename"

        #     # Resize the image
        #     # mogrify -resize 260x200 $file

        #     mogrify -quality 75 $file
        # else
        #     echo "/// $filename"
        #     mogrify -quality 25 $file
        # fi

        # ========== Do size based changes ==========
        # Get the size of the file in bytes using 'stat' command
        file_size=$(stat -c %s "$file")

        # Compare the file size with the threshold
        if [ "$file_size" -gt "$threshold_size_bytes" ]; then
            echo "The file '$file' is larger than 100KB."
            mogrify -quality 25 $file
        fi
    fi
done
