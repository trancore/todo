import { Meta, StoryObj } from '@storybook/react';

import Button from '~/components/presentational/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'Button/Button',
  component: Button,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof Button>;

/**
 * パターン
 */
export const Selectable: Story = {
  args: {
    text: 'テキスト',
    width: undefined,
  },
};

export const Long: Story = {
  render: () => {
    return <Button text="完了" width={256} onClick={() => {}} />;
  },
};

export const SignIn: Story = {
  render: () => {
    return <Button text="サインイン" onClick={() => {}} />;
  },
};
