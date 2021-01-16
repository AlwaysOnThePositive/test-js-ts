import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Constants } from '@/utils/constants';

@Component
export default class TestComponent extends Vue {
  @Prop({ required: true }) prop1: string;
  @Prop({ required: true }) prop2: string;

  innerVariable1 = '';
  innerVariable2 = '';

  doEvent1(): void {
    // this.$emit('emit-1', `emit ${this.prop1}`);
    console.log(Constants.vue);
    this.$emit('emit-1', this.innerVariable1);
  }

  doEvent2(): void {
    // this.$emit('emit-2', `emit ${this.prop2}`);
    this.$emit('emit-2', this.innerVariable2);
  }
}
