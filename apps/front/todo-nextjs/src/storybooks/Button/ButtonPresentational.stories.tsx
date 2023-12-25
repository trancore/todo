import { Meta, StoryObj } from '@storybook/react';
import ButtonPresentational from '~/components/presentational/Button/Button';

const meta: Meta<typeof ButtonPresentational> = {
  title: 'Button/ButtonPresentational',
  component: ButtonPresentational,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof ButtonPresentational>;

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
    return <ButtonPresentational text="完了" width={256} />;
  },
};

export const SignIn: Story = {
  render: () => {
    return <ButtonPresentational text="サインイン" />;
  },
};
