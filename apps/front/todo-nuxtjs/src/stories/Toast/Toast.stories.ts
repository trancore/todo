import type { Meta, StoryObj } from '@storybook/vue3';

import Toast from '~/components/Toast/Toast.vue';

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
export const Default: Story = {
  args: {
    text: 'ダミーデータ',
    displayed: true,
  },
};
