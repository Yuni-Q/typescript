// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

// const person = {
//   name: "nicolas",
//   age: 22,
//   gender: "male"
// };

const lynn = new Human("Lynn", 18, "female");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${
    person.gender
  }!`;
};
// const sayHi = (name, age, gender?) => {
//   console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
// }

console.log(sayHi(lynn));
// sayHi(name, age);

export {};
