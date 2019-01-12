function Point() {
switch (typeof arguments[0]) {
case 'number' : Point.$int.apply(this, arguments); break;
case 'string' : Point.$str.apply(this, arguments); break;
case 'object' : Point.$obj.apply(this, arguments); break;
default : /*NOP*/
}
}

Point.$int = function(x, y) {
this.x = x;
this.y = y;
};

Point.$str = function(coord) {
this.x = parseInt(coord.charAt(0), 10);
this.y = parseInt(coord.charAt(1), 10);
}

Point.$obj = function(obj) {
this.x = obj.x;
this.y = obj.y;
}

var p1 = new Point(2,3);
var p2 = new Point('23');
var p3 = new Point({x:2, y:3});

console.log(p1.y);
console.log(p1 instanceof Point);
console.log(p2.y);
console.log(p2 instanceof Point);
console.log(p3.y);
console.log(p3 instanceof Point);
