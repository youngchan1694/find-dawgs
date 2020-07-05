import Vue from "vue";
import Vuetify from "vuetify";
import { mount } from "@vue/test-utils";
import Home from "../../views/Home.vue";
Vue.use(Vuetify);
const vuetify = new Vuetify();

describe("Home.vue", () => {
  const wrapper = mount(Home, { vuetify });

  test("matches the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  //Mock server response

  //Test filtering

  //Test searching
});
