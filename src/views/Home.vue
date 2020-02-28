<template>
  <div class="home">
    <HelloWorld msg="hello world" />
    <Message />
    <Children :parentMessage="message" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import Message from '@/components/Message.vue';
import Children from '@/components/Children.vue';

@Component({
  components: {
    HelloWorld,
    Message,
    Children,
  },
})
export default class Home extends Vue {
  private message: string = 'Props message!!';
}
</script>
