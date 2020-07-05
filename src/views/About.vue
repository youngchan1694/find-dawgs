<template>
  <div class="about">
    <v-btn @click="alertMe"> Click Me!</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TestingPage",
  methods: {
    alertMe() {
      alert("Hi Chris!");
    }
  }
});
</script>
