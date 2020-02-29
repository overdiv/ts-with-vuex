<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class ToggleMixin extends Vue {
  public show: boolean = false;
  public toggle() {
      this.show = !this.show;
  }
}
</script>