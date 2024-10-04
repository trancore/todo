import type { Meta, StoryObj } from '@storybook/vue3';

import TextArea from '~/components/Form/TextArea.vue';

const meta: Meta<typeof TextArea> = {
  title: 'Form/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof TextArea>;

/**
 * パターン
 */
export const TodoDescription: Story = {
  args: {
    labelName: '説明',
    placeholder: 'やることやることやることやることやることやること',
    errorMessage: 'エラーです。',
  },
};
