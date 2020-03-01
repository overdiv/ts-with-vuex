<template>
  <div id="app">
    <!-- <Count />
    <button @click="increase">증가</button>
    <button @click="decrease">감소</button> -->
    <hr>
    {{ $store.state }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Count from './components/count.vue';

@Component({
  components: {
    Count,
  },
})
export default class App extends Vue {
  increase() {
    this.$store.dispatch('increase');
  }

  decrease() {
    this.$store.dispatch('decrease');
  }

  created() {
    console.log(this.$store);
    this.$store.dispatch('moduleA/setRootData', 'test')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
