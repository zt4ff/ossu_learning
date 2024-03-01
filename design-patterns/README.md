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
