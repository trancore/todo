import type { Meta, StoryObj } from '@storybook/vue3';

import Menu from '~/components/Menu/Menu.vue';

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
  args: {
    userName: 'username',
    signOut: () => {},
    closeMenu: () => {},
  },
};
