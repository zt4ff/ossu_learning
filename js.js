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
    await delay(1000)
    console.log(i);
    i += 1;
  }
};


loop()