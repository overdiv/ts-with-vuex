<template>
<div>
  <strong>Event Bus</strong><br>
  <input type="text" v-model="text">
  <button @click="click">메세지 전송</button>
</div>  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Bus from '@/common/event-bus';

@Component
export default class EventChild1 extends Vue {
  public text: string = '';

  public click() {
    Bus.$emit('sendMessage', this.text);
  }
}
</script>