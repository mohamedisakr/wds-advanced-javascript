import assert from "assert/strict";

// https://exploringjs.com/impatient-js/ch_destructuring.html

// ************************ 39.1 A first taste of destructuring **************************///
const arr = ["a", "b", "c"];
const [x, y] = arr; // (A)
assert.equal(x, "a");
assert.equal(y, "b");

// ************************ 39.2 Constructing vs. extracting **************************///
// Constructing: one property at a time
const jane1 = {};
jane1.first = "Jane";
jane1.last = "Doe";
// Constructing: multiple properties
const jane2 = {
  first: "Jane",
  last: "Doe",
};
assert.deepEqual(jane1, jane2);

// Extracting: one property at a time
// const f1 = jane.first;
// const l1 = jane.last;
// assert.equal(f1, "Jane");
// assert.equal(l1, "Doe");
// Extracting: multiple properties (NEW!)
const { first, last } = jane1; // (A)
assert.equal(first, "Jane");
assert.equal(last, "Doe");
console.log(`first: ${first}, last: ${last}`);

// ************************ 39.3 Where can we destructure? **************************///
// Variable declarations:
const [a] = ["x"];
assert.equal(a, "x");
let [b] = ["y"];
assert.equal(b, "y");

// Assignments:
let b;
[b] = ["z"];
assert.equal(b, "z");

// Parameter definitions:
const f = ([x]) => x;
assert.equal(f(["a"]), "a");

// ************************ 39.4 Object-destructuring **************************//
const address = {
  street: "Evergreen Terrace",
  number: "742",
  city: "Springfield",
  state: "NT",
  zip: "49007",
};

const { street: s, city: c } = address;
assert.equal(s, "Evergreen Terrace");
assert.equal(c, "Springfield");

/*
// ************************ 37.4 Object-destructuring **************************
const address = {
  street: "Evergreen Terrace",
  number: "742",
  city: "Springfield",
  state: "NT",
  zip: "49007",
};

const { street, city } = address;
assert.equal(street, "Evergreen Terrace");
assert.equal(city, "Springfield");

const getId = (param) => param;

const param = "abc";
const id = getId(param);
assert.equal(id, param);

assert.deepEqual(["a", "b", "c"], ["a", "b", "c"]);

assert.throws(
  () => {
    null.prop;
  },
  {
    name: "TypeError",
    message: `Cannot read property 'prop' of null`,
  }
);

// ************************ 37.3 Where can we destructure? **************************
/*
const f = ([x]) => x;
assert.equal(f(["a"]), "a");
*/

/*
const [a] = ["x"];
assert.equal(a, "x");

let [b] = ["y"];
assert.equal(b, "y");
*/

// ************************ 37.2 Constructing vs. extracting **************************
/*
const jane = {
  first: "Jane",
  last: "Doe",
};

// Extracting: multiple properties (NEW!)
const { first, last } = jane; // (A)
assert.equal(first, "Jane");
assert.equal(last, "Doe");
*/

/*
// Constructing: one property at a time
const jane1 = {};
jane1.first = "Jane";
jane1.last = "Doe";

// Constructing: multiple properties
const jane2 = {
  first: "Jane",
  last: "Doe",
};

assert.deepEqual(jane1, jane2);
*/

// ************************ 37.1 A first taste of destructuring **************************//

/*
// const arr = ["a", "b", "c"];
// const [x, y] = arr; // (A)
// assert.strictEqual(x, "a", `${x} == a`);
// assert.strictEqual(y, "b", `${y} == b`);
*/

// const arr = ["a", "b", "c"];
// const x = arr[0]; // extract
// const y = arr[1]; // extract
// console.log(x);
// console.log(y);
