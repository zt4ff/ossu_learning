# Topic 1: The Shell

Link: https://missing.csail.mit.edu/2020/course-shell/

## What is the shell?

They are many interface you interate with, there's GUI, AR/VR, etc. For the most part, these intefaces are usually useful but somethings, the button you need might not be available of the interface or programmed there. So you have to go the old-fashioned way with shell.

Though shell may be different in details, they are roughly the same; they allow you to run programs, give them input, and inspect their output in a semi-structured way.

We can simply run commands in a shell and pass arguments to the command. For instance:

```bash
echo hello
```

This would output hello on the terminal.

When you run the command `echo`, it searchs through your `$PATH` directories (seperated by :) then find a file by the name `echo` and runs it if it's an executable file.

## Connecting programs

In the shell, programs have two primary "streams" - which is input stream and output stream.

The simplest form of redirection is `< file` and `> file`.

You can also use >> to append to a file. Where this kind of input/output redirection really shines is the use of pipes. The `|` operator lets you "chain" programs such that the output of one of the input is the input of another:

```bash
# ls outputs all the files and directory in the "/" directory and then pipes (|) the output to tail -n1 which prints
ls -l / | tail -nl

curl --head --silent google.com | grep --ignore-case
```
