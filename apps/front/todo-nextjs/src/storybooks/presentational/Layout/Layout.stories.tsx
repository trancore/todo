import { Meta, StoryObj } from '@storybook/react';

import Layout from '~/components/presentational/Layout/Layout';

const meta: Meta<typeof Layout> = {
  title: 'Layout/Layout',
  component: Layout,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof Layout>;

/**
 * パターン
 */
export const Selectable: Story = {
  args: {
    children: <p>ここにchildrenの内容が表示されます</p>,
  },
};
