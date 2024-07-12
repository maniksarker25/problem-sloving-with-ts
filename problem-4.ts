//4.Task: Sorting Objects

//Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

// solution-------------------
type TCar = {
  make: string;
  model: string;
  year: number;
};

const cars: TCar[] = [
  {
    make: "Toyota",
    model: "Camry",
    year: 2022,
  },
  {
    make: "Honda",
    model: "Accord",
    year: 2023,
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2021,
  },
  {
    make: "Chevrolet",
    model: "Silverado",
    year: 2020,
  },
  {
    make: "BMW",
    model: "X5",
    year: 2022,
  },
  {
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2023,
  },
  {
    make: "Audi",
    model: "A4",
    year: 2021,
  },
  {
    make: "Tesla",
    model: "Model S",
    year: 2024,
  },
  {
    make: "Hyundai",
    model: "Elantra",
    year: 2022,
  },
  {
    make: "Kia",
    model: "Seltos",
    year: 2023,
  },
];

const sortCarsByYear = (cars: TCar[]): TCar[] => {
  const sortedArray = cars.sort((a, b) =>
    a.year > b.year ? 1 : b.year > a.year ? -1 : 0
  );
  return sortedArray;
};

console.log(sortCarsByYear(cars));
