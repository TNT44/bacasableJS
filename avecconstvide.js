function Foo () {
    this.bar = 'baz';
}

Foo.prototype.init_1 = function (bar) {
    this.bar = bar;
    return this;
};

Foo.prototype.init_2 = function (baz) {
    this.bar = 'something to do with '+baz;
    return this;
};

Foo.prototype.aff = function ()
{
  console.dir(this);
};

var a = new Foo().init_1('constructor 1');
a.aff();


var b = new Foo().init_2('constructor 2');
b.aff();
