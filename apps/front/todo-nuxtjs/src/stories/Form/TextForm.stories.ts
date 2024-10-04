import type { Meta, StoryObj } from '@storybook/vue3';

import TextForm from '~/components/Form/TextForm.vue';

const meta: Meta<typeof TextForm> = {
  title: 'Form/TextForm',
  component: TextForm,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof TextForm>;

/**
 * パターン
 */
export const TodoTitle: Story = {
  args: {
    labelName: 'タイトル',
    placeholder: 'やることやることやること',
    errorMessage: 'エラーメッセージが表示されます。',
  },
};
