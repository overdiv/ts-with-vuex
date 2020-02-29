<template>
  <button @click="countEmit">자식에서 숫자를 증가시킵니다.</button>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component
export default class ChildrenEmit extends Vue {
  @Emit('counter') private countEmit() {
    return null;
  }
}
</script>
