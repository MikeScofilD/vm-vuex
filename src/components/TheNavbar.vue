<template>
  <header class="navbar">
    Vuex Counter: {{ counter }}
    <button class="btn" @click="addFive">Добавить</button>
  </header>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
export default {
  computed: {
    // counter() {
    //   return this.$store.getters.counter;
    // },
    //$store->getters->counter();
    //count/ название модуля
    ...mapGetters('count',['counter'])
  },
  methods: {
    ...mapMutations('count',['add']),
    addFive(){
      this.add({value: 5})
    }
    // add(){ 
    //   this.$store.commit('add', 3);
    // }
  },
};
</script>
