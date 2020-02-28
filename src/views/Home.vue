<template>
  <div class="home">
    <HelloWorld msg="hello world" />
    <Message />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Message from '@/components/Message';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Message,
  },
};
</script>
