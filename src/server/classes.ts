export namespace DogClasses {
  export class Area {
    city: string;
    state: string;
    zip: number;

    constructor(city: string, state: string, zip: number) {
      this.city = city;
      this.state = state;
      this.zip = zip;
    }
  }

  export class Dog {
    name: string;
    pic: string;
    area: Area;
    gender: string;
    breed: string;
    age: number;
    neutered: boolean;
    weight: number;
    shots: Array<Shot>;

    constructor(
      name: string,
      pic: string,
      area: Area,
      gender: string,
      breed: string,
      age: number,
      neutered: boolean,
      weight: number,
      shots: Array<Shot>
    ) {
      this.name = name;
      this.pic = pic;
      this.area = area;
      this.gender = gender;
      this.breed = breed;
      this.age = age;
      this.neutered = neutered;
      this.weight = weight;
      this.shots = shots;
    }
  }

  export class Shot {
    name: string;
    date: Date = new Date();

    constructor(name: string, date: Date = new Date()) {
      this.name = name;
      this.date = date;
    }
  }
}
