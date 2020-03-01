<template>
<p>
  전송된 메세지 : {{ message }}
</p>  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Bus from '@/common/event-bus';

@Component
export default class EventChild2 extends Vue {
  public message: string = '';

  public created() {
    Bus.$on('sendMessage', (message: string) => {
      this.message = message;
    });
  }
}
</script>