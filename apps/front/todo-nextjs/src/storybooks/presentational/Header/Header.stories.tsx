import { Meta, StoryObj } from '@storybook/react';
import Header from '~/components/presentational/Header/Header';

const meta: Meta<typeof Header> = {
  title: 'Header/Header',
  component: Header,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof Header>;

/**
 * パターン
 */
export const Selectable: Story = {
  args: {
    isSignin: false,
  },
};
export const Signin: Story = {
  render: () => {
    return <Header isSignin={true} />;
  },
};
export const Signout: Story = {
  render: () => {
    return <Header isSignin={false} />;
  },
};
