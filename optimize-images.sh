#!/bin/bash

input_dir="./src/resources/unoptimized"
output_dir="./src/resources"

if [ ! -d $output_dir ]; then
  mkdir $output_dir
fi

for file in $input_dir/*; do
  file_name=$(basename "$file")

  convert "$file" -strip -interlace Plane -sampling-factor 4:2:0 -gaussian-blur 0.05 -quality 85% "$output_dir/$file_name"
done

echo "All images have been optimized!"
 
