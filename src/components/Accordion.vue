<template>
  <div class="card">
    <a class="card-header" @click="toggle">
      Featured
    </a>
    <div class="card-body" v-show="show">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Mixins } from 'vue-property-decorator';
import ToggleMixin from '@/components/ToggleMixin.vue';

@Component({
  ToggleMixin,
})
export default class Accordion extends Mixins(ToggleMixin) {
}
</script>
<style lang="scss" scoped>
a {
  display: inline-block;
  margin: 10px 0;
  border-bottom: 1px solid #555;
  cursor: pointer;
}
</style>