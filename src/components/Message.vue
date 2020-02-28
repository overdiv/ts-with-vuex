<template>
  <div>
    <input type="text" v-model="message" placeholder="내용을 입력해주세요">
    <p>{{ message || '여기에 입력값이 출력됩니다.' }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Message extends Vue {
  public message: string = '';
}
</script>