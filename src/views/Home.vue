<template>
  <div class="home">
    <HelloWorld msg="hello world" />
    <Message />
    <hr>
    <Children :parentMessage="changeMsg" />
    <br>
    <button @click="changeMessage">Change Message</button>
    <hr>
    <ChildrenEmit @counter="countNumber"></ChildrenEmit>
    <p>
      부모에서 숫자를 보여줍니다. : {{ count }}
    </p>
    <hr>
    <ChildrenInject />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import Message from '@/components/Message.vue';
import Children from '@/components/children/Children.vue';
import ChildrenEmit from '@/components/ChildrenEmit.vue';
import ChildrenInject from '@/components/ChildrenInject.vue';

@Component({
  components: {
    HelloWorld,
    Message,
    Children,
    ChildrenEmit,
    ChildrenInject,
  },
})
export default class Home extends Vue {
  public changeMsg: string = 'Message...';
  private message: string = 'Props message!!';
  private count: number = 0;

  public changeMessage() {
    this.changeMsg = 'Hello Watch!';
  }

  public countNumber() {
    this.count += 1;
  }

  @Provide('message') msg: string = 'provide/inject complate';
}
</script>
