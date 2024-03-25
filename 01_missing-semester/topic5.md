## Command-line Environment

### Job Control

Shell uses a UNIX communication mechanism called a signal to communicate information to the process.
When a process receives a signal, it stops its execution, deals with the signal and potentially changes the flow of execution based on the information that the signal delivered.

Most times, we type `Ctrl-C` with is a `SIGINT` signal

- python script that ignores a SIGINT signal

```py
#!/usr/bin/env python
import signal, time

def handler(signum, time):
    print("\nI got a SIGINT, but I am not stopping")

signal.signal(signal.SIGINT, handler)

# a looper just to see when the procees is running and
# when it is not
i = 0
while True:
    time.sleep(.1)
    print("\r{}".format(i), end="")
    i += 1
```

- a node script to do the same

```js
#!/usr/bin/env node

const process = require("process");

const handler = (signal) => {
  console.log(`\nI got a ${signal}, but I am not stopping`);
};

process.on("SIGINT", handler);

let i = 0;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const loop = async () => {
  while (true) {
    await delay(1000);
    console.log(i);
    i += 1;
  }
};

loop();
```

We can use a SIGQUIT to stop the process since we are choosing to
handle the SIGINT seperately

A more generic signal to ask a process to exit gracefully is the SIGTERM signal which we can use with the `kill` command.

### pausing and backgorund process

We can pause a process with the SIGSTP signal which we can call with the `Ctrl-Z` command on a terminal.

then we can continue the paused job in the foreground or background using `fg` and `bg` respectively.

> Note that a background process is still a child process of the terminal so closing the terminal (which is sending another signal, SIGHUP). You can use `nohup` to ignore `SIGHUP`, or use `disown` is the process is already running.

### Terminal Multiplexers

You may want to use your terminal more productively with stuff like side panes, etc. tmux is a terminal multiplexers that makes it easy to do stuffs like this. And tmux allows you to be able to attach and detach your terminal session. This can help your workflow to be better when you are working with remote machines since it avoids the need to use nohup and similar tricks.

Some popular tmux key binds

#### Sessions

`tmux` starts a new session
`tmux new -s NAME` starts a new session with that name
`tmux ls` list all currency sessions
`<C-b> d` detaches the current session
`tmux a` attaches the last session. use the `-t` to specific which

#### Windows

`<C-b> c` creates a new window
`<C-d>` teminates a window
`<C-b> N` goes to the nth window - N is a number
`<C-b> ,` rename the current window
`<C-b> w` list current windows

### Questions and Solutions

1. From what we have seen, we can use some ps aux | grep commands to get our jobs’ pids and then kill them, but there are better ways to do it. Start a sleep 10000 job in a terminal, background it with Ctrl-Z and continue its execution with bg. Now use pgrep to find its pid and pkill to kill it without ever typing the pid itself. (Hint: use the -af flags).

`Solution`:
```bash
pgrep sleep | awk '{print $1}' | xargs kill
```

