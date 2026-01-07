#!/usr/bin/env bash

THIS_FILE="${BASH_SOURCE[0]}" # e.g. .sport/geet-git.sh
THIS_DIR="$(cd -- "$(dirname -- "$THIS_FILE")" && pwd)" # e.g. .sport
PARENT_DIR="$(dirname "$THIS_DIR")" # e.g. # e.g. /path/to/soccer

# this file behaves like git, but always specifies our correct git directory, working tree, and gitignore
# e.g. exec git --git-dir=".sport/dot-git" --work-tree="." -c "core.excludesFile=.sport/.geetexclude" "\$@"
exec git --git-dir="$THIS_DIR/dot-git" --work-tree="$PARENT_DIR" -c "core.excludesFile=$THIS_DIR/.geetexclude" "$@"