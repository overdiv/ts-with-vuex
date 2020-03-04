<template>
<div class="input-group">
  <label class="input-group-addon">
    <input type="checkbox" aria-label="check" @change="changeStatus"
    :checked="status === 'clear'"
    >
  </label>
  <input type="text" class="form-control" aria-label="내용" :value="title">
  <span class="input-group-btn">
    <button class="btn btn-default" type="button" @click="removeItem">X</button>
  </span>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ItemInput extends Vue {
  @Prop() readonly id!: number;
  @Prop() readonly title!: string;
  @Prop() readonly status!: 'active' | 'clear';

  changeStatus($event: Event) {
    const checked: boolean = ($event.target as HTMLInputElement).checked;

    if (checked) {
      this.$store.commit('changeStatus', {id: this.id, status: 'clear'});
    } else {
      this.$store.commit('changeStatus', {id: this.id, status: 'active'});
    }
  }

  removeItem() {
    this.$store.commit('removeItem', this.id);
  }
}
</script>

<style lang="scss" scoped>
.input-group {
  margin-top: 10px;
}
</style>