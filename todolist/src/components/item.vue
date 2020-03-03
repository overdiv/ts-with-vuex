<template>
<div class="input-group">
  <label class="input-group-addon">
    <input type="checkbox" aria-label="check" @change="changeStatus">
  </label>
  <input type="text" class="form-control" aria-label="내용">
  <span class="input-group-btn">
    <button class="btn btn-default" type="button" @click="removeItem">X</button>
  </span>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ItemInput extends Vue {
  changeStatus() {

  }

  removeItem() {

  }
}
</script>