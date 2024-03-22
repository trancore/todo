import { Meta, StoryObj } from '@storybook/react';

import Toast from '~/components/presentational/Toast/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Toast/Toast',
  component: Toast,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof Toast>;

/**
 * パターン
 */
export const Selectable: Story = {
  args: {
    text: 'ダミーデータ',
  },
};

export const Created: Story = {
  render: () => {
    return <Toast text="TODOを登録しました" />;
  },
};

export const Deleted: Story = {
  render: () => {
    return <Toast text="TODOを削除しました" />;
  },
};

export const Updated: Story = {
  render: () => {
    return <Toast text="TODOを編集しました" />;
  },
};
