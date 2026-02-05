import type { Meta, StoryObj } from '@storybook/vue3';

import TodoEclipse from '~/components/Todo/TodoEclipse.vue';

const meta: Meta<typeof TodoEclipse> = {
  title: 'Todo/TodoEclipse',
  component: TodoEclipse,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof TodoEclipse>;

/**
 * パターン
 */
export const Default: Story = {
  args: {
    title: 'やることやることやること',
    description:
      'やることやることやることやることやることやることやることやることやることやることやることやること',
    click: () => undefined,
  },
};
