<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="search"
                clearable
                flat
                prepend-inner-icon="mdi-magnify"
                hide-details
                label="Search"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
                v-model="cities"
                :items="filteredCities"
                multiple
                label="Cities"
              >
                <template v-slot:selection="{ item, index }">
                  <span v-if="index === 0">{{ item }}</span>
                  <span v-if="index === 1" class="grey--text caption"
                    >(+{{ cities.length - 1 }} others)</span
                  >
                </template>
              </v-select>
            </v-col>

            <v-col>
              <v-select
                v-model="states"
                :items="filteredStates"
                multiple
                label="States"
              >
                <template v-slot:selection="{ item, index }">
                  <span v-if="index === 0">{{ item }}</span>
                  <span v-if="index === 1" class="grey--text caption"
                    >(+{{ states.length - 1 }} others)</span
                  >
                </template>
              </v-select>
            </v-col>

            <v-col>
              <v-select
                v-model="zips"
                :items="filteredZips"
                multiple
                label="Zip Codes"
              >
                <template v-slot:selection="{ item, index }">
                  <span v-if="index === 0">{{ item }}</span>
                  <span v-if="index === 1" class="grey--text caption"
                    >(+{{ zips.length - 1 }} others)</span
                  >
                </template>
              </v-select>
            </v-col>

            <v-col>
              <v-select
                v-model="genders"
                :items="filteredGenders"
                multiple
                label="Genders"
              >
                <template v-slot:selection="{ item, index }">
                  <span v-if="index === 0">{{ item }}</span>
                  <span v-if="index === 1" class="grey--text caption"
                    >(+{{ value.length - 1 }} others)</span
                  >
                </template>
              </v-select>
            </v-col>

            <v-col>
              <v-select
                v-model="breeds"
                :items="filteredBreeds"
                multiple
                label="Breeds"
              >
                <template v-slot:selection="{ item, index }">
                  <span v-if="index === 0">{{ item }}</span>
                  <span v-if="index === 1" class="grey--text caption"
                    >(+{{ value.length - 1 }} others)</span
                  >
                </template>
              </v-select>
            </v-col>

            <v-col>
              <v-select
                v-model="ages"
                :items="filteredAges"
                multiple
                label="Ages"
              >
                <template v-slot:selection="{ item, index }">
                  <span v-if="index === 0">{{ item }}</span>
                  <span v-if="index === 1" class="grey--text caption"
                    >(+{{ value.length - 1 }} others)</span
                  >
                </template>
              </v-select>
            </v-col>

            <v-col>
              <v-select
                v-model="neutered"
                :items="filteredNeutered"
                multiple
                label="Neutured"
              >
                <template v-slot:selection="{ item, index }">
                  <span v-if="index === 0">{{ item }}</span>
                  <span v-if="index === 1" class="grey--text caption"
                    >(+{{ value.length - 1 }} others)</span
                  >
                </template>
              </v-select>
            </v-col>

            <v-col>
              <v-select
                v-model="weights"
                :items="filteredWeights"
                multiple
                label="Weights"
              >
                <template v-slot:selection="{ item, index }">
                  <span v-if="index === 0">{{ item }}</span>
                  <span v-if="index === 1" class="grey--text caption"
                    >(+{{ value.length - 1 }} others)</span
                  >
                </template>
              </v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row style="padding: 0% 2% 0% 2%">
      <v-col>
        <v-data-iterator
          :search="search"
          :items="filteredDogs"
          disable-pagination
          hide-default-footer
        >
          <template v-slot:default="props">
            <v-row>
              <v-col
                v-for="item in props.items"
                :key="item.name"
                cols="3"
                sm="6"
                md="4"
                lg="3"
              >
                <v-card>
                  <v-card-title class="subheading font-weight-bold">
                    {{ item.name }}
                  </v-card-title>

                  <v-divider></v-divider>

                  <v-list>
                    <v-list-item>
                      <v-list-item-content>Breed:</v-list-item-content>
                      <v-list-item-content class="align-end">
                        {{ item.breed }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>Gender:</v-list-item-content>
                      <v-list-item-content class="align-end">
                        {{ item.gender }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>Age:</v-list-item-content>
                      <v-list-item-content class="align-end">
                        {{ item.age }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>Shots:</v-list-item-content>
                      <v-list-item-content class="align-end">
                        <span v-for="shot of item.shots" :key="shot.name">{{
                          shot.name
                        }}</span>
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>Neutered:</v-list-item-content>
                      <v-list-item-content class="align-end">
                        {{ item.neutered }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>Weight:</v-list-item-content>
                      <v-list-item-content class="align-end"
                        >{{ item.weight }} lb</v-list-item-content
                      >
                    </v-list-item>
                  </v-list>
                  <v-img :src="getImage(item.pic)" height="500" width="500" />
                </v-card>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { DogClasses } from "@/server/classes";

export default Vue.extend({
  name: "HomePage",
  data: () => ({
    search: "" as string,
    dogs: [] as DogClasses.Dog[],
    cities: [] as string[],
    states: [] as string[],
    zips: [] as number[],
    genders: [] as string[],
    breeds: [] as string[],
    ages: [] as number[],
    neutered: [] as boolean[],
    weights: [] as number[]
  }),
  computed: {
    filteredCities(): Array<string> {
      return this.dogs.map(dog => {
        return dog.area.city;
      });
    },
    filteredStates(): Array<string> {
      return this.dogs.map(dog => {
        return dog.area.state;
      });
    },
    filteredZips(): Array<number> {
      return this.dogs.map(dog => {
        return dog.area.zip;
      });
    },
    filteredGenders(): Array<string> {
      return this.dogs.map(dog => {
        return dog.gender;
      });
    },
    filteredBreeds(): Array<string> {
      return this.dogs.map(dog => {
        return dog.breed;
      });
    },
    filteredAges(): Array<number> {
      return this.dogs.map(dog => {
        return dog.age;
      });
    },
    filteredNeutered(): Array<boolean> {
      return this.dogs.map(dog => {
        return dog.neutered;
      });
    },
    filteredWeights(): Array<number> {
      return this.dogs.map(dog => {
        return dog.weight;
      });
    },
    filteredDogs(): Array<DogClasses.Dog> {
      return this.dogs.filter(dog => {
        const inCities: boolean =
          this.cities.length > 0 ? this.cities.includes(dog.area.city) : true;
        const inStates: boolean =
          this.states.length > 0 ? this.states.includes(dog.area.state) : true;
        const inZips: boolean =
          this.zips.length > 0 ? this.zips.includes(dog.area.zip) : true;
        const inGenders: boolean =
          this.genders.length > 0 ? this.genders.includes(dog.gender) : true;
        const inBreeds: boolean =
          this.breeds.length > 0 ? this.breeds.includes(dog.breed) : true;
        const inAges: boolean =
          this.ages.length > 0 ? this.ages.includes(dog.age) : true;
        const inNeutered: boolean =
          this.neutered.length > 0
            ? this.neutered.includes(dog.neutered)
            : true;
        const inWeights: boolean =
          this.weights.length > 0 ? this.weights.includes(dog.weight) : true;
        return (
          inCities &&
          inStates &&
          inZips &&
          inGenders &&
          inGenders &&
          inBreeds &&
          inAges &&
          inNeutered &&
          inWeights
        );
      });
    }
  },
  mounted() {
    this.getDogs();
  },
  methods: {
    async getDogs() {
      const response = await axios.post("http://localhost:4000/graphql", {
        query: `{
          dogs {
            name
            pic
            area {
              city
              state
              zip
            }
            gender
            breed
            age
            shots {
              name
              date
            }
            neutered
            weight
          }
        }`
      });
      this.dogs = response.data.data.dogs;
    },
    //Date comes back in UNIX so remember to convert
    getImage(fileName: string) {
      return require(`../../public/static/dogs/${fileName}`);
    }
  }
});
</script>
