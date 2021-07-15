import assert from "assert/strict";
import { airportList } from "./data.js";

const person = {
  name: "Terrance Roberts",
  occupation: {
    title: "District Manager",
    yearsHeld: 2,
  },
  pets: [
    {
      kind: "dog",
      name: "Fiona",
    },
    {
      kind: "cat",
      name: "Ralph",
    },
  ],
};

// kind: "cat"
const {
  pets: [, { kind }],
} = person;

console.log(kind);

/*
const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

const {
  car: { inside },
} = myStorage;

const maps = inside["glove box"];
console.log(maps);
*/

/*
// https://stackoverflow.com/questions/58273832/destructuring-nested-objects-in-an-array
const exampleObject = {
  collection: [
    {
      name: "First Object",
    },
    {
      name: "Second Object",
    },
  ],
};

const {
  collection: [{ name: first }, { name: second }],
} = exampleObject;

console.log(first);
console.log(second);
*/

/*
const { 0: x, 2: y } = ["a", "b", "c"];
assert.equal(x, "a");
assert.equal(y, "c");
*/

/*
// object-destructure primitive values
const course = "JavaScript for impatient programmers (ES2021 edition)";
const { length } = course;
console.log(length);
*/

/*
// https://hackernoon.com/accessing-nested-objects-in-javascript-f02f1bd6387f
const user = {
  id: 101,
  email: "jack@dev.com",
  personalInfo: {
    name: "Jack",
    address: {
      line1: "westwish st",
      line2: "washmasher",
      city: "wallas",
      state: "WX",
    },
  },
};

// Destructuring city, state from the user object
const {
  personalInfo: {
    address: { city, state },
  },
} = user;

console.log(city);
console.log(state);
*/

/*
// https://www.rithmschool.com/courses/intermediate-javascript/javascript-nested-data-structures-objects
let instructorData = {
  name: "Elie",
  additionalData: {
    instructor: true,
    favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
    moreDetails: {
      favoriteBasketballTeam: "New York Knicks",
      numberOfSiblings: 3,
      isYoungest: true,
      hometown: {
        city: "West Orange",
        state: "NJ",
      },
      citiesLivedIn: ["Seattle", "Providence", "New York"],
    },
  },
};

// Destructuring city, state from the instructorData object
const {
  additionalData: {
    moreDetails: {
      hometown: { city, state },
    },
  },
} = instructorData;

console.log(city);
console.log(state);
*/

/*
const getAttributes = (item) => {
  const { attributes } = item; //: { name, city, country },
  return attributes; //   return { name, city, country };
};

airportList.forEach((item) => console.log(getAttributes(item)));

const item = airportList[airportList.length - 1];
console.log(getAttributes(item));
*/

/*
// use destructuring to combine 2 objects
const airport = {
  id: "YCB",
  type: "airport",
};

const airportDetails = {
  attributes: {
    name: "Cambridge Bay Airport",
    city: "Cambridge Bay",
    country: "Canada",
    iata: "YCB",
    icao: "CYCB",
    latitude: "69.108101",
    longitude: "-105.138",
    altitude: 90,
    timezone: "America/Edmonton",
  },
};

const airportInfo = { ...airport, ...airportDetails };
console.log(airportInfo);
// */

/*
const toFirstAndLast = (fullName) => {
  // return fullName.split(" ");
  const [firstName, lastName] = fullName.split(" ");
  return { firstName, lastName };
};

console.log(toFirstAndLast("Mohamed Sakr"));
*/
