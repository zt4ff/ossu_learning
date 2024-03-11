## Editors Vim

Link: https://missing.csail.mit.edu/2020/editors/

### The philosophy of Vim
When programming, you spend most of your time reading/editing, not writing. For this reason, Vim is a modal editor: it has different modes for inserting text vs manipulating text. Vim avoids the use of mouse and arrow keys because it's too slow. At the end, vim is an editor that can match the speed at which you think.

Vim as multiple operating modes:
- Normal: for moving around a file and making edits
- Insert: for inserting text
- Replace: for replacing text
- Visual (plain, line, or block): for selecting blocks of text
- Command-line: for running a command

Keystrokes have different meanings in different operating modes. For example, the letter `x` in insert mode will insert a literal `x` character, but in normal mode it will delete the character under the cursor, and in Visual mode it will delete the selection

## Setting your vim
You cannot write vim config in `init.lua` but neovim exposes meta-accessors that abstract the lowel level functions of vim api in the lua runtime.

