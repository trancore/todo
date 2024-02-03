import { Meta, StoryObj } from '@storybook/react';
import TodoEdit from '~/components/presentational/Modal/TodoEdit';

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
  render: () => {
    return (
      <TodoEdit
        title="やることやることやること"
        description="やることやることやることやることやることやることやることやることやることやること"
        deadline={new Date('2024/01/01')}
        errorMessage="ダミーデータ"
        register={undefined}
      />
    );
  },
};
