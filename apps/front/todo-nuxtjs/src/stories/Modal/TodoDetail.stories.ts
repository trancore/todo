import type { Meta, StoryObj } from '@storybook/vue3';

import TodoDetail from '~/components/Modal/TodoDetail.vue';

const meta: Meta<typeof TodoDetail> = {
  title: 'Modal/TodoDetail',
  component: TodoDetail,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof TodoDetail>;

/**
 * パターン
 */
export const TodoDetailModal: Story = {
  args: {
    todo: {
      title: 'やることやることやること',
      description:
        'やることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやること',
      deadlineAt: '2024/01/01',
    },
    locateCompleted: false,
    disabled: {
      completedButtonDisabled: false,
      deletedButtonDisabled: false,
    },
    event: {
      clickCompletedButton: () => {},
      clickEditButton: () => {},
      clickDeleteButton: () => {},
    },
  },
};
