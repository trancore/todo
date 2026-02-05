import { Meta, StoryObj } from '@storybook/react';
import TodoEclipse from '~/components/presentational/Todo/TodoEclipse';

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
export const Selectable: Story = {
  args: {
    title: 'ダミーデータ',
    description: 'ダミーデータ',
    click: () => undefined,
  },
};

export const ExampleOne: Story = {
  render: () => {
    return (
      <TodoEclipse
        title="やることやることやること"
        description="やることやることやることやることやることやることやることやることやることやることやることやること"
        click={() => undefined}
      />
    );
  },
};
