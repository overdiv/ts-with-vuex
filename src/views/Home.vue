<template>
  <div class="home">
    <HelloWorld msg="hello world" />
    <Message />
    <hr>
    <Children :parentMessage="changeMsg" />
    <br>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import Message from '@/components/Message.vue';
import Children from '@/components/children/Children';

@Component({
  components: {
    HelloWorld,
    Message,
    Children,
  },
})
export default class Home extends Vue {
  public changeMsg: string = 'Message...';
  private message: string = 'Props message!!';

  public changeMessage() {
    this.changeMsg = 'Hello Watch!';
  }
}
</script>
