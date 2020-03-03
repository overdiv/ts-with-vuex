<template>
<div id="app">
  <appHeader></appHeader>
  <itemInput></itemInput>
  <item></item>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import appHeader from './components/header.vue';
import itemInput from './components/item-input.vue';
import item from './components/item.vue';

@Component({
  components: {
    appHeader,
    itemInput,
    item,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  padding: 2em;
}
</style>
