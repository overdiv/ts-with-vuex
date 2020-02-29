<template>
  <div class="dropdown">
    <button class="btn" @click="toggle" type="button">
      Dropdown button
    </button>
    <ul v-show="show">
      <li>
        list item 1
      </li>
      <li>
        list item 2
      </li>
      <li>
        list item 3
      </li>
      <li>
        list item 4
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Mixins } from 'vue-property-decorator';
import ToggleMixin from '@/components/ToggleMixin.vue';

@Component({
  ToggleMixin,
})
export default class Dropdown extends Mixins(ToggleMixin) {
}
</script>
