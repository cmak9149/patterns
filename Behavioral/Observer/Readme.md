https://en.wikipedia.org/wiki/Observer_pattern#JavaScript

The observer pattern is a software design pattern in which an object, named the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

It is mainly used for implementing distributed event handling systems, in "event driven" software. In those systems, the subject is usually named a "stream of events" or "stream source of events", while the observers are called "sinks of events". The stream nomenclature alludes to a physical setup where the observers are physically separated and have no control over the emitted events from the subject/stream-source. This pattern then perfectly suits any process where data arrives from some input that is not available to the CPU at startup, but instead arrives "at random" (HTTP requests, GPIO data, user input from keyboard/mouse/..., distributed databases and blockchains, ...). Most modern programming-languages comprise built-in "event" constructs implementing the observer-pattern components. While not mandatory, most 'observers' implementations would use background threads listening for subject-events and other support mechanisms provided by the kernel (Linux epoll, ...).

Overview
The Observer design pattern is one of the twenty-three well-known "Gang of Four" design patterns describing how to solve recurring design challenges in order to design flexible and reusable object-oriented software, i.e. objects which are easier to implement, change, test, and reuse.[1]

What problems can the Observer design pattern solve?
The Observer pattern addresses the following problems:[2]

A one-to-many dependency between objects should be defined without making the objects tightly coupled.
It should be ensured that when one object changes state, an open-ended number of dependent objects are updated automatically.
It should be possible that one object can notify an open-ended number of other objects.
Defining a one-to-many dependency between objects by defining one object (subject) that updates the state of dependent objects directly is inflexible because it couples the subject to particular dependent objects. Still, it can make sense from a performance point of view or if the object implementation is tightly coupled (think of low-level kernel structures that execute thousands of times a second). Tightly coupled objects can be hard to implement in some scenarios, and hard to reuse because they refer to and know about (and how to update) many different objects with different interfaces. In other scenarios, tightly coupled objects can be a better option since the compiler will be able to detect errors at compile-time and optimize the code at the CPU instruction level.

What solution does the Observer design pattern describe?
Define Subject and Observer objects.
so that when a subject changes state, all registered observers are notified and updated automatically (and probably asynchronously).
The sole responsibility of a subject is to maintain a list of observers and to notify them of state changes by calling their update() operation. The responsibility of observers is to register (and unregister) themselves on a subject (to get notified of state changes) and to update their state (synchronize their state with the subject's state) when they are notified. This makes subject and observers loosely coupled. Subject and observers have no explicit knowledge of each other. Observers can be added and removed independently at run-time. This notification-registration interaction is also known as publish-subscribe.

See also the UML class and sequence diagram below.

Strong vs. weak reference
The observer pattern can cause memory leaks, known as the lapsed listener problem, because in a basic implementation, it requires both explicit registration and explicit deregistration, as in the dispose pattern, because the subject holds strong references to the observers, keeping them alive. This can be prevented by the subject holding weak references to the observers.

Coupling and typical pub-sub implementations
Typically, the observer pattern is implemented so the "subject" being "observed" is part of the object for which state changes are being observed (and communicated to the observers). This type of implementation is considered "tightly coupled", forcing both the observers and the subject to be aware of each other and have access to their internal parts, creating possible issues of scalability, speed, message recovery and maintenance (also called event or notification loss), the lack of flexibility in conditional dispersion, and possible hindrance to desired security measures. In some (non-polling) implementations of the publish-subscribe pattern (aka the pub-sub pattern), this is solved by creating a dedicated "message queue" server (and sometimes an extra "message handler" object) as an extra stage between the observer and the object being observed, thus decoupling the components. In these cases, the message queue server is accessed by the observers with the observer pattern, "subscribing to certain messages" knowing only about the expected message (or not, in some cases), while knowing nothing about the message sender itself; the sender also may know nothing about the observers. Other implementations of the publish-subscribe pattern, which achieve a similar effect of notification and communication to interested parties, do not use the observer pattern at all.[3][4]

In early implementations of multi-window operating systems like OS/2 and Windows, the terms "publish-subscribe pattern" and "event driven software development" were used as a synonym for the observer pattern.[5]

The observer pattern, as described in the GoF book, is a very basic concept and does not address removing interest in changes to the observed "subject" or special logic to be done by the observed "subject" before or after notifying the observers. The pattern also does not deal with recording when change notifications are sent or guaranteeing that they are being received. These concerns are typically handled in message queueing systems of which the observer pattern is only a small part.

Related patterns: Publish–subscribe pattern, mediator, singleton.

Uncoupled
The observer pattern may be used in the absence of publish-subscribe, as in the case where model status is frequently updated. Frequent updates may cause the view to become unresponsive (e.g., by invoking many repaint calls); such observers should instead use a timer. Thus instead of being overloaded by change message, the observer will cause the view to represent the approximate state of the model at a regular interval. This mode of observer is particularly useful for progress bars, where the underlying operation's progress changes with several times per second.

Structure
UML class and sequence diagram

A sample UML class and sequence diagram for the Observer design pattern. [6]
In the above UML class diagram, the Subject class does not update the state of dependent objects directly. Instead, Subject refers to the Observer interface (update()) for updating state, which makes the Subject independent of how the state of dependent objects is updated. The Observer1 and Observer2 classes implement the Observer interface by synchronizing their state with subject's state.
The UML sequence diagram shows the run-time interactions: The Observer1 and Observer2 objects call attach(this) on Subject1 to register themselves. Assuming that the state of Subject1 changes, Subject1 calls notify() on itself.
notify() calls update() on the registered Observer1 and Observer2 objects, which request the changed data (getState()) from Subject1 to update (synchronize) their state.

UML class diagram

UML class diagram of Observer pattern
