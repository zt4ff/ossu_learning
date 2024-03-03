/**
 * The Context defines the interface of interest to client. Is also
 * maintains a reference to an instance of a State subclass, whuch
 * represents the current state of the Context.
 */
class Context {
  /**
   * A reference to the current state of the Context.
   */
  private state: State;

  constructor(state: State) {
    this.transitionTo(state);
  }

  /**
   * The Context allows changing the State object at runtime.
   */
  public transitionTo(state: State): void {
    console.log(`Content: Transition to ${(<any>state).constructor.name}.`);
    this.state = state;
    this.state.setContext(this);
  }

  /**
   * The Context delegstes part of its behavior to the current State object
   */
  public request1(): void {
    this.state.handle1();
  }

  public request2(): void {
    this.state.handle2();
  }
}

/**
 * The base State class declares methods that all Concrete State should
 * implement and also provide a backreference to the Context object, associated
 * with the State. This backreference can be used by States to transition the
 * context to another state
 */
abstract class State {
  protected context: Context;

  public setContext(context: Context) {
    this.context = context;
  }

  public abstract handle1(): void;

  public abstract handle2(): void;
}

/**
 * Concrete States implement various behaviours, associated with a state of the
 * Context.
 */
class ConcreteStateA extends State {
  public handle1(): void {
    console.log("ConcreateStateA handles request1.");
    console.log("ConcreateStateA wants to change the state of the context");
    this.context.transitionTo(new ConcreteStateB());
  }

  public handle2(): void {
    console.log("ConcreateA handles request 2");
  }
}

/**
 * Concrete States implement various behaviours, associated with a state of the
 * Context.
 */
class ConcreteStateB extends State {
  public handle1(): void {
    console.log("ConcreateA handles request 2");
  }
  public handle2(): void {
    console.log("ConcreateStateB handles request1.");
    console.log("ConcreateStateB wants to change the state of the context");
    this.context.transitionTo(new ConcreteStateA());
  }
}

/**
 * The client code.
 */
const context = new Context(new ConcreteStateA());
context.request1(); // changes state to concreatestateB
context.request2(); // changes state back to concreatestateA
