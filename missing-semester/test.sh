#!/bin/sh

# example that itetare through arguments we provide, 
# grep for the foobar and append it to the file as a 
# command if not found
# echo "Starting program at $(date)"

# echo "Running program $0 with $# arguments with pid $$"

# for file in "$@"; do
#     grep foobar "file" > /dev/null 2> /dev/null
#     # When pattern is not found, grep has exist status 1
#     # We redicect STDOUT and STDERR to a null register since we do not care about them
#     if [[ $? -ne 0 ]]; then
#         echo "File $file does not have any foobar, adding one"
#         echo "# foobar" >> "$file"
#     fi
# done

# Exercise 2
macro() {
    # save the CWD in a environment variables
    export CWD="$(pwd)"
    echo $CWD
}

polo() {
    echo $CWD
}
