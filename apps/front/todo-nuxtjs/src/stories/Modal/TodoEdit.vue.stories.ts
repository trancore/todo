import type { Meta, StoryObj } from '@storybook/vue3';

import TodoEdit from '~/components/Modal/TodoEdit.vue';

const meta: Meta<typeof TodoEdit> = {
  title: 'Modal/TodoEdit',
  component: TodoEdit,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof TodoEdit>;

/**
 * パターン
 */
export const TodoEditModal: Story = {
  args: {
    todo: {
      title: 'やることやることやること',
      description:
        'やることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやること',
    },
    event: {
      onClickEdit: () => {},
    },
  },
};
