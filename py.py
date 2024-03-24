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