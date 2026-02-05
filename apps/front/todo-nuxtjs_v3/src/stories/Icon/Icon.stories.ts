import type { Meta, StoryObj } from '@storybook/vue3';

import Icon from '~/components/Icon/Icon.vue';

const meta: Meta<typeof Icon> = {
  title: 'Icon/Icon',
  component: Icon,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof Icon>;

/**
 * パターン
 */
export const Check32Black: Story = {
  args: {
    name: 'Check',
    size: 32,
    color: '#000000',
    clickIcon: () => {},
  },
};

export const Uncheck64Red: Story = {
  args: {
    name: 'Uncheck',
    size: 64,
    color: '#FF0000',
    clickIcon: () => {},
  },
};
