import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { TodoForm } from '~/types/todo';

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
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { formState, register } = useForm<TodoForm>({});
    return (
      <TodoEdit
        title="やることやることやること"
        description="やることやることやることやることやることやることやることやることやることやること"
        formState={formState}
        register={register}
        onClickEdit={() => {}}
      />
    );
  },
};
