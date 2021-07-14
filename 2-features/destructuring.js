import { airportList } from "./data.js";

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
*/

/*
const toFirstAndLast = (fullName) => {
  // return fullName.split(" ");
  const [firstName, lastName] = fullName.split(" ");
  return { firstName, lastName };
};

console.log(toFirstAndLast("Mohamed Sakr"));
*/
