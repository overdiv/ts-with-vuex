<template>
<div>
  <appItem v-for="item in renderList" :id="item.id" :title="item.title" :status="item.status" :key="item.id"></appItem>
</div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import appItem from '../components/item.vue';

@Component({
  components: {
    appItem,
  },
})
export default class ItemList extends Vue {
  data: any[] = [
    {id: 0, title: 'sdfasf', status: 'active'},
    {id: 1, title: 'asdf-asdf', status: 'clear'},
    {id: 2, title: 'sadf-dsaf', status: 'active'},
    {id: 3, title: 'sdfasdf-asdfasf', status: 'clear'},
  ];

  renderList: any[] = this.data;

  @Watch('$route.params.status')
  routeUpdate(newValue: string) {
    if (!newValue) {
      this.renderList = this.data;
    } else if (newValue === 'active' || newValue === 'clear') {
      this.renderList = this.data.slice().filter((item: any) => {
        return item.status === newValue;
      }) 
    }
  }
}
</script>
