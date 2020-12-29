import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import hello-world from '@/components/hello-world.vue';

describe('hello-world.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(hello-world, {
      props: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
