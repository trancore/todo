import type { Meta, StoryObj } from '@storybook/vue3';

import TodoIconBox from '~/components/Todo/TodoIconBox.vue';

const meta: Meta<typeof TodoIconBox> = {
  title: 'Todo/TodoIconBox',
  component: TodoIconBox,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof TodoIconBox>;

/**
 * パターン
 */
export const Default: Story = {
  args: {
    uncheck: {
      has: true,
      click: () => {},
    },
    check: {
      has: true,
      click: () => {},
    },
    squareEdit: {
      has: true,
      click: () => {},
    },
    trashCan: {
      has: true,
      click: () => {},
    },
  },
};
