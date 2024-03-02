/**
 * The Handler interface declares a method for building the chain of handlers.
 * It also declares a method for executing a request.
 */
interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string | null;
}

/**
 * The default chaining behaviour can be implemented inside a base handler class
 */

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    // Returning a handler from here will let us link handlers
    // in a convenient way like this:
    // monkey.setNext(squirrel).setNext(dog)
    return handler;
  }

  public handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}
// All Concrete Handlers either handle a request or pass it to the
// next handler in the chain

class MoneyHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === "banana") {
      return `Monkey: I'll eat the ${request}`;
    }
    return super.handle(request);
  }
}

class SquirrelHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === "nut") {
      return `Squirrel: I'll eat the ${request}`;
    }
    return super.handle(request);
  }
}

class DogHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === "bone") {
      return `Dog: I'll eat the ${request}`;
    }
    return super.handle(request);
  }
}

/**
 * The client code is usually suited to work with a single handler. In
 * most cases, it is not even aware the the handler is part of
 * a chain
 */

function clientCode(handler: Handler) {
  const foods = ["nut", "banana", "bone"];

  for (const food of foods) {
    const result = handler.handle(food)
    if (result) {
        console.log(result)
    } else {
        console.log("request is left untouched")
    }
  }
}

// The other part of the client code constructs the actual chain
const monkey = new MoneyHandler()
const squirrel =  new SquirrelHandler()
const dog = new DogHandler()
