<template>
  <v-container fluid>
    <v-data-iterator :items="dogs" items-per-page.sync="2" hide-default-footer>
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{
                item.name
              }}</v-card-title>

              <v-divider></v-divider>

              <v-list>
                <v-list-item>
                  <v-list-item-content>Breed:</v-list-item-content>
                  <v-list-item-content class="align-end">{{
                    item.breed
                  }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Gender:</v-list-item-content>
                  <v-list-item-content class="align-end">{{
                    item.gender
                  }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Age:</v-list-item-content>
                  <v-list-item-content class="align-end">{{
                    item.age
                  }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Shots:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    <span v-for="shot of item.shots" :key="shot.name">
                      {{ shot.name }}
                    </span>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Neutered:</v-list-item-content>
                  <v-list-item-content class="align-end">{{
                    item.neutered
                  }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Weight:</v-list-item-content>
                  <v-list-item-content class="align-end"
                    >{{ item.weight }} lb</v-list-item-content
                  >
                </v-list-item>
              </v-list>
              <v-img :src="getImage(item.pic)" />
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  data: () => ({
    dogs: []
  }),
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
    getImage(fileName) {
      return require(`../../public/static/dogs/${fileName}`);
    }
  }
};
</script>
