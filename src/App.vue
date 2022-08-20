<template>
  <div class="container with-nav">
    <the-navbar></the-navbar>
    <div class="card">
      <h1>Про Vuex</h1>
      <!-- store.js -> state() -> counter -->
      <!-- store.js -> getters() -> counter()-->
      <h2>
        Счетчик {{ $store.getters["count/counter"] }} ({{
          $store.getters["count/doubleCounter"]
        }})
      </h2>
      <!-- ...mapGetters(['counter', 'doubleCounter']) -->
      <h2>Счетчик {{ counter }} ({{ doubleCounter }})</h2>
      <button @click="add" class="btn primary">Добавить</button>
      <button @click="incrementAsync({ value: 10 })" class="btn danger">
        Добавить 10
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import TheNavbar from "./components/TheNavbar.vue";
export default {
  components: { TheNavbar },
  computed: {
    ...mapGetters("count", ["counter", "doubleCounter"]),
  },
  // data() {
  //   return {
  //     counter: 0,
  //   };
  // },
  methods: {
    // ...mapMutations(['increment', 'incrementAsync']),
    ...mapMutations("count", { add: "increment" }),
    ...mapActions("count", ["incrementAsync"]),
    // add(){
    //   // store.js -> mutations -> increment
    //   this.$store.commit('increment');
    //   //  ...mapMutations(['increment', 'incrementAsync']),
    //   this.increment;
    // },
    // incrementAsync() {
    //   // store.js -> actions -> incrementAsync()
    //   this.$store.dispatch("incrementAsync", { value: 10 });
    // },
  },
};
</script>
