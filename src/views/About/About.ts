import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import TestComponent from '@/views/Test/Test.vue';

interface PropsForTestComponent {
  prop1: number;
  prop2: number;
}

interface ListernersForTestComponent {
  [key: string]: (payload: string) => void;
}

@Component({
  components: {
    TestComponent,
  },
})
export default class AboutComponent extends Vue {
  prop1Val = 1;
  prop2Val = 2;

  get prop1(): number {
    return this.prop1Val * 10;
  }

  get prop2(): number {
    return this.prop2Val * 10;
  }

  get propsForTestComponent(): PropsForTestComponent {
    return { prop1: this.prop1Val, prop2: this.prop2 };
  }

  get listenersTestComponent(): ListernersForTestComponent {
    return {
      'emit-1': this.catchEvent1,
      'emit-2': this.catchEvent2,
    };
  }

  catchEvent1(payload: string): void {
    console.log('event1', payload);
  }

  catchEvent2(payload: string): void {
    console.log('event2', payload);
  }
}
