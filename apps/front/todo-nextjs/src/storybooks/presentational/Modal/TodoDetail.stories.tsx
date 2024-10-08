import { Meta, StoryObj } from '@storybook/react';

import TodoDetail from '~/components/presentational/Modal/TodoDetail';

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
  render: () => {
    return (
      <TodoDetail
        title="やることやることやること"
        description="やることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやることやること"
        deadlineAt="2024/01/01"
        locateCompleted={false}
        completedButtonDisabled={false}
        deletedButtonDisabled={false}
        clickCompletedButton={() => {}}
        clickEditButton={() => {}}
        clickDeleteButton={() => {}}
      />
    );
  },
};
