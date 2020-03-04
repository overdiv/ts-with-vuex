<template>
<div class="form-group">
  <input type="text" 
  class="form-control" 
  v-model="title"
  placeholder="할일을 입력하세요"
  @keyup.enter="addItem"
  >
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: mapState([
    'todoList',
  ]),
})
export default class ItemInput extends Vue {
  title: string = '';
  todoList!: any[];

  addItem() {
    this.$store.commit('addItem', {
      id: this.todoList.length + 1,
      title: this.title,
      status: 'active',
    });
    this.title = '';
  }
}
</script>