const express = require("express");
const { graphql, buildSchema } = require("graphql");
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
    age: Int
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
