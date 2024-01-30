import { Meta, StoryObj } from '@storybook/react';
import Menu from '~/components/presentational/Menu/Menu';

const meta: Meta<typeof Menu> = {
  title: 'Menu/Menu',
  component: Menu,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof Menu>;

/**
 * パターン
 */
export const Default: Story = {
  render: () => {
    return <Menu userName="username" clickIcon={() => {}}></Menu>;
  },
};
