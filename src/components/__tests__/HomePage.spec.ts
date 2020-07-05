import Vue from "vue";
import Vuetify from "vuetify";
import { mount } from "@vue/test-utils";
import HomePage from "../HomePage.vue";
Vue.use(Vuetify);
const vuetify = new Vuetify();

describe("HomePage.vue", () => {
  const wrapper = mount(HomePage, { vuetify });

  test("matches the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
