> Recommended book: Design Patterns: Elements of Reusable Object-Oriented Software by Gamma, Helm, Johnson, and Vlissides - This guys catalogue are called the catalogue of the gang of four.

They are 23 patterns found in the gang of 4 catalogue.

- Creational Patterns - how you create objects
- Structural Patterns - how objects relates
- Behavioural Patterns - how objects behaves

## Creational Patterns

### Singleton Pattern

It refers to having only one object of a class.

- Enforces one and only one object of a Singleton class
- Has the Singleton object globally accessible

### Factory Pattern

A Factory pattern says just define an inteface or abstract class for creating an object but let the subclasses decide which class to instantiate.

> The way I understand it is that, sometimes, when you have an open code where change is most likely to happen, you can abstract out the contruction of the object

## Structural Patterns

### Facade Pattern

A facade simple acts as a point of entry into your software. It's a wrapper class that encapsulates a subsystem in order to hide the subsystem's complexity:

- It is a means to hide the complexity of a subsystem by encapsulating it behind a unifying wrapper called a facade class.
- Removes the need for client classes to manage a subsystem on their own, resulting in less coupling between the subsystem and the client classes.
- Handle instantiation and redirection of tasts to the appropriate class within the subsystem
- Provides client classes with a simplified interface for the subsystem.
- Acrs simply as a point of entry to a subsystem that does not add more functionality to the subsystem

### Adapter Pattern

> There's this problem in real life where the output of one system may not conform to the input of another system. For instance, IRL, your keyboard output is a USB will your PC is the old P2 input. You can get an adapter to help with the compactibility.

This pattern comprises of three parts.

Client -> Adapter -> Adaptee

### Composite Pattern
Achieves two goals:
- To compose nested structures of objects
- To deal with the classes for these objects uniformly