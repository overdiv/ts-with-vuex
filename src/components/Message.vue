<template>
  <div>
    <input type="text" v-model="message" placeholder="메세지를 입력해주세요">
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Message extends Vue {
  message: string = '';
}
</script>