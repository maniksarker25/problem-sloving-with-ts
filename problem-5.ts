//5.Task: Find And Modify

//Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

// solution ------
type TPeople = {
  name: string;
  age: number;
  gender: "male" | "female";
};

const peoples: TPeople[] = [
  {
    name: "Manik Sarker",
    age: 20,
    gender: "male",
  },
  {
    name: "Sadia Khan",
    age: 22,
    gender: "female",
  },
  {
    name: "Rakib Hossain",
    age: 25,
    gender: "male",
  },
];

const modifyAgeByName = (
  persons: TPeople[],
  name: string,
  newAge: number
): TPeople[] | string => {
  // Find the person by name
  const personIndex = persons.findIndex((person) => person.name === name);

  if (personIndex !== -1) {
    // Modify the age of the person if found
    persons[personIndex].age = newAge;
    return persons;
  } else {
    return "People not found";
  }
};

console.log(modifyAgeByName(peoples, "Sadia Khan", 23));
