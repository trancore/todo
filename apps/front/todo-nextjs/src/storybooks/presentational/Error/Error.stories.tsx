import { Meta, StoryObj } from '@storybook/react';

import Error from '~/components/presentational/Error/Error';

const meta: Meta<typeof Error> = {
  title: 'Error/Error',
  component: Error,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof Error>;

/**
 * パターン
 */
export const Selectable: Story = {
  args: {
    text: 'エラーメッセージ',
  },
};

export const ErrorMessage: Story = {
  render: () => {
    return <Error displayed text={'エラーが発生しました'} />;
  },
};
