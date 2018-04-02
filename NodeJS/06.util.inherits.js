let events = require('events');
let util = require('util');

let Person = function (name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

let eric = new Person('eric');
let steven = new Person('Steven');
let john = new Person('John');
let persons = [eric, steven, john];

persons.forEach(function (person) {
    person.on('speak', function (msg) {
        console.log(person.name + " says: " + msg);
    });
});

eric.emit('speak', 'I am Eric!');