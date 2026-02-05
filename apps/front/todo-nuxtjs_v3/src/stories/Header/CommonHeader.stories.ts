import type { Meta, StoryObj } from '@storybook/vue3';

import CommonHeader from '~/components/Header/CommonHeader.vue';

const meta: Meta<typeof CommonHeader> = {
  title: 'Header/CommonHeader',
  component: CommonHeader,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof CommonHeader>;

/**
 * パターン
 */
export const Signin: Story = {
  args: {
    hasPlusIcon: true,
    isSignin: true,
  },
};

export const Signout: Story = {
  args: {
    hasPlusIcon: true,
    isSignin: false,
  },
};
