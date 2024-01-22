## Software Architect and Design Role in the Industry

- software design looks at the lower-level aspects of a system.
- software architecture looks at the higher-level aspects of a system.

> In common layman's definitions, I think a software architect is more like a real architect, just the system's blueprints.
> While the software designer is more of an interior designer. They focus more on the specifics of the system. The chairs, the paint products, the framework to use in the system etc.

## Object-Oriented Thinking

What is Object-Oriented Modeling? Object-oriented modelling involves representing key concepts through objects in your software when solving a problem. Depending on the problem, many concepts, even instances of people, places, or things become distinct objects in the software.

## Design in the Software Process

- taking time to form requirements and design is statistically proven to help finish the completion or development of a system

Example of the process:

- system requirements
- conceptual designs
- technical designs

### Expressing Requirements with User Stories

One technique for expressing requirements is with a user story. A user story looks like this:

`As a _____, I want to _____ so that _____`

For example:
"As an online shopper, I want to add an item to my cart so that I can purchase it"
From the user story above, thinking in an object-oriented design, you can easily deduce that the object is an online shopper, item and cart. And the actions or methods are adding item and purchasing it.

## Four Design Principples of Object Oriented Design

- Abstraction
- Encapsulation
- Decomposition
- Generalization

### Abstraction

Abstraction is the idea of simplifying a concept in the problem domain to its essentials within some context. Abstraction allows you to better understand a concept by breaking it down into description that ignores unimportant details.

> To me, abstraction is simply exposing only the essentials of a concept and ignoring unimportant details. And the essentials of a concept are based in the context of the concept. For instance, the abstraction of a Person concept would expose details like driving, driver's licence, while that of a buyer would have different essentials.

### Encapsulation

Encapsulation forms a self-contained object by bundling the data and functions it requires to work, exposes an interface whereby other objects can access and use it, and restricts access to cerntain inside details.

> Thinking of a class as a Black Box, in a way where the internal working of the class is not needed by external users of the class. It promotes reusuability and modularity.

### Decomposition

Decomposition is taking a whole thing and dividing it up into different parts. Or, on the flip side, taking a bunch of separate parts with different functionalities and combining them together to form a whole. Decomposition allows you to further break down problems into pieces that are easier to understand and solve.

### Generalization

> In most cases, the same set of action can be applied to different set of problem. So in Object-oriented design, we do this via inheritance. Where a class can be reusable, extended or configured for different scope

## Expressing Design Structure in Java and UML Class Diagrams

UML - Unified Modeling Language

In Decomposition, there are several relationship that can exist between different entity.

- Association relationship - complete seperate relationship, one object doesn't belong to another. A Cat and a Yarn, Human and Car (0.._ - 0.._)
- Aggregation - "has-a" relationship but when object don't exist, it won't necessary make the other object not-existent. E.g Book and Bookshelf
- Composition - "a strong has-a" relationship. when object don't exist, the other is non existent. E.g Human and Life
