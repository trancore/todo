import { Meta, StoryObj } from '@storybook/react';
import Hearder from '~/components/presentational/Header/Header';

const meta: Meta<typeof Hearder> = {
  title: 'Header/Hearder',
  component: Hearder,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof Hearder>;

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
    return <Hearder isSignin={true} />;
  },
};
export const Signout: Story = {
  render: () => {
    return <Hearder isSignin={false} />;
  },
};
