function Foo(name) {
    this.name = name;
}

Foo.prototype.sayHi = function() {
    return this.name + ' says Hello Boston!';
};
