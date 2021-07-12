import data from "./data.js";

const getAttributes = (item) => {
  const { attributes } = item; //: { name, city, country },
  return attributes; //   return { name, city, country };
};

data.forEach((item) => console.log(getAttributes(item)));
// const item = data[data.length - 1];
// console.log(getAttributes(item));
