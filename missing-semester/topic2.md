# Topic 2: Shell Tools and Scripting

Assigning variables in Shell can be done via

```bash
foo=bar
```

if you space between the statement like `foo = bar`, bash will assume foo is a command with arguments `=` and `bar`.

---

To reference variable in bash, you can use `$foo`:

```bash
echo $foo
```

---

You can also create functions in bash script as:

```bash
mcd () {
    mkdir -p "$1"
    cd "$1"
}
```

Bash uses special characters to refer to arguments such as:

- `$0` Name of the script
- `$1` to `$9` is the first argument and so on
- `$@` all the arguments
- `$#` Number of arguments
- `$?` return code of the previous command
- `$$` process identification number (PID) of the current sprint
- `!!` Entire last command including the arguments
- `$_` Last argument from the last command

There's short circuiting operations that can also be utilized to running commands conditionally.
There's the `&&`(and) and the `||`(or) operator. Some examples:

```bash
false || echo "Oops, fail"
# Ooos, fail

true || echo "This won't be printed"
```

---
Let's say you want out pass the output of a command to a variable of a statement, you can do that using `$(CMD)`
---

### Wildcard matching 
In bash you can use `?` to match one and `*` to match any about. 
For instance, let's say you have these sets of file. 
```md
|- foo
|- foo1
|- foo2
|- foobarx
```