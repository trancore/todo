import { Meta, StoryObj } from '@storybook/react';
import TodoIconBox from '~/components/presentational/Todo/TodoIconBox';

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
export const Selectable: Story = {
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

export const AllHas: Story = {
  render: () => {
    return (
      <TodoIconBox
        uncheck={{ has: true, click: () => {} }}
        check={{ has: true, click: () => {} }}
        squareEdit={{ has: true, click: () => {} }}
        trashCan={{ has: true, click: () => {} }}
      />
    );
  },
};
