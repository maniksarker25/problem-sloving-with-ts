//1.Task: Array Filtering And Mapping

// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

// solution---------------
type TPerson = {
  name: string;
  age: number;
  gender: "male" | "female";
};
const persons: TPerson[] = [
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
  {
    name: "Nusrat Jahan",
    age: 21,
    gender: "female",
  },
  {
    name: "Abir Ahmed",
    age: 23,
    gender: "male",
  },
  {
    name: "Samiha Rahman",
    age: 24,
    gender: "female",
  },
  {
    name: "Ahsan Habib",
    age: 26,
    gender: "male",
  },
  {
    name: "Mehjabin Chowdhury",
    age: 27,
    gender: "female",
  },
  {
    name: "Tanvir Alam",
    age: 28,
    gender: "male",
  },
  {
    name: "Shabnam Akter",
    age: 29,
    gender: "female",
  },
  {
    name: "Fahim Rahman",
    age: 30,
    gender: "male",
  },
  {
    name: "Nafis Chowdhury",
    age: 27,
    gender: "male",
  },
  {
    name: "Rashidul Islam",
    age: 22,
    gender: "male",
  },
];

const filterOutPersons = (persons: TPerson[]): string[] => {
  const femalePersons = persons.filter((person) => person.gender === "female");
  const remainingPersons = persons
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
  return remainingPersons;
};

console.log(filterOutPersons(persons));
