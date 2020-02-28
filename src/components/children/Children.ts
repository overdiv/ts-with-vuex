import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Children extends Vue {
  @Prop() public parentMessage?: string;

  public alertMessage: string = '';
  @Watch('parentMessage',
    {
      // immediate: true,
      // deep: true,
    })
  public update(value: string, oldValue: string) {
    this.alertMessage = '메세지가 업데이트 되었습니다.';
  }
}
