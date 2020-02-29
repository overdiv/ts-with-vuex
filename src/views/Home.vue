<template>
  <div class="home">
    <HelloWorld msg="hello world" />
    <Message />
    <hr>
    <Children :parentMessage="changeMsg" />
    <br>
    <button @click="changeMessage">Change Message</button>
    <hr>
    <ChildrenEmit @counter="countNumber" />
    <p>
      부모에서 숫자를 보여줍니다. : {{ count }}
    </p>
    <hr>
    <ChildrenInject />
    <hr>
    <label><ChildrenCheckbox v-model="checked" @change="change" /> {{ text }}</label>
    <hr>
    <Accordion />
    <Dropdown />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import Message from '@/components/Message.vue';
import Children from '@/components/children/Children.vue';
import ChildrenEmit from '@/components/ChildrenEmit.vue';
import ChildrenInject from '@/components/ChildrenInject.vue';
import ChildrenCheckbox from '@/components/ChildrenCheckbox.vue';
import Accordion from '@/components/Accordion.vue';
import Dropdown from '@/components/Dropdown.vue';

@Component({
  components: {
    HelloWorld,
    Message,
    Children,
    ChildrenEmit,
    ChildrenInject,
    ChildrenCheckbox,
    Accordion,
    Dropdown,
  },
})
export default class Home extends Vue {
  public changeMsg: string = 'Message...';

  @Provide('message') public msg: string = 'provide/inject complate';

  public checked: boolean = false;
  public text: string = '동의하지 않습니다.';
  private message: string = 'Props message!!';
  private count: number = 0;

  public changeMessage() {
    this.changeMsg = 'Hello Watch!';
  }

  public countNumber() {
    this.count += 1;
  }

  public change(checked: boolean) {
    this.checked = checked;
    this.text = checked ? '동의합니다.' : '동의하지 않습니다.';
  }
}
</script>

<style lang="scss" scoped>
label {
  cursor: pointer;
}
</style>