import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import Button from '~/components/Button/Button.vue';

const meta: Meta<typeof Button> = {
  title: 'Button/Button',
  component: Button,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof Button>;

/**
 * パターン
 */
export const Long: Story = {
  args: {
    text: '完了',
    width: 256,
    onClick: fn(),
  },
};

export const SignIn: Story = {
  args: {
    text: 'サインイン',
    onClick: fn(),
  },
};
