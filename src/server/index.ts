const express = require("express");
const { buildSchema } = require("graphql");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
import { DogClasses } from "./classes";
const schema = buildSchema(`
  type Query {
    language: String
    dogs: [Dog]
  }
  type Dog {
    name: String
    pic: String
    area: Area
    gender: String
    breed: String
    age: Float
    shots: [Shot]
    neutered: Boolean
    weight: Float
  }
  type Shot {
    name: String
    date: String
  }
  type Area {
    city: String
    state: String
    zip: Int
  }
`);

const dogs = [
  new DogClasses.Dog(
    "Roger",
    "golden retriever.jpg",
    new DogClasses.Area("Atlanta", "Georgia", 30303),
    "Male",
    "Golden Retriever",
    2,
    true,
    76.5,
    [
      new DogClasses.Shot("distemper", new Date(2020, 11, 15)),
      new DogClasses.Shot("parvovirus", new Date(2020, 11, 15)),
      new DogClasses.Shot("hepatitis", new Date(2020, 11, 15)),
      new DogClasses.Shot("rabies", new Date(2020, 11, 15))
    ]
  ),
  new DogClasses.Dog(
    "Ace",
    "labrador.jpg",
    new DogClasses.Area("Atlanta", "Georgia", 30303),
    "Male",
    "Labrador",
    3,
    true,
    80.7,
    [
      new DogClasses.Shot("distemper", new Date(2020, 2, 17)),
      new DogClasses.Shot("parvovirus", new Date(2020, 2, 17)),
      new DogClasses.Shot("hepatitis", new Date(2020, 3, 4)),
      new DogClasses.Shot("rabies", new Date(2020, 3, 4))
    ]
  ),
  new DogClasses.Dog(
    "Bella",
    "german sheperd.jpg",
    new DogClasses.Area("Birmingham", "Alabama", 35201),
    "Female",
    "German Shepherd",
    0.6,
    false,
    48.0,
    [
      new DogClasses.Shot("distemper", new Date(2020, 5, 18)),
      new DogClasses.Shot("parvovirus", new Date(2020, 5, 18))
    ]
  ),
  new DogClasses.Dog(
    "Luna",
    "bulldog.jpg",
    new DogClasses.Area("Ambler", "Pennsylvania", 19002),
    "Female",
    "Bulldog",
    2,
    true,
    49.6,
    [
      new DogClasses.Shot("distemper", new Date(2019, 2, 15)),
      new DogClasses.Shot("parvovirus", new Date(2019, 12, 10)),
      new DogClasses.Shot("hepatitis", new Date(2019, 12, 10)),
      new DogClasses.Shot("rabies", new Date(2019, 2, 15))
    ]
  ),
  new DogClasses.Dog(
    "Rose",
    "maltese.jpg",
    new DogClasses.Area("Sydney", "Australia", 19002),
    "Female",
    "Maltese",
    5,
    true,
    25,
    [
      new DogClasses.Shot("distemper", new Date(2019, 2, 15)),
      new DogClasses.Shot("parvovirus", new Date(2019, 12, 10)),
      new DogClasses.Shot("hepatitis", new Date(2019, 12, 10))
      //new DogClasses.Shot("rabies", new Date(2019, 2, 15))
    ]
  )
];

const rootValue = {
  language: () => "GraphQL",
  dogs: () => dogs
};

const app = express();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    rootValue,
    schema,
    graphiql: true
  })
);

app.listen(4000, () => console.log("Listening on 4000"));
