import type { Meta, StoryObj } from '@storybook/vue3';

import Date from '~/components/Form/Date.vue';

const meta: Meta<typeof Date> = {
  title: 'Form/Date',
  component: Date,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof Date>;

/**
 * パターン
 */
export const TodoDeadlineAt: Story = {
  args: {
    labelName: '期限',
    errorMessage: 'エラーメッセージが表示されます。',
  },
};
