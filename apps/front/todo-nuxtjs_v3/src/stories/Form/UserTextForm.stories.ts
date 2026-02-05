import type { Meta, StoryObj } from '@storybook/vue3';

import UserTextForm from '~/components/Form/UserTextForm.vue';

const meta: Meta<typeof UserTextForm> = {
  title: 'Form/UserTextForm',
  component: UserTextForm,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof UserTextForm>;

/**
 * パターン
 */
export const Username: Story = {
  args: {
    type: 'text',
    labelName: '名前',
    errorMessage: '名前は必須です',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    labelName: 'メールアドレス',
    errorMessage: 'メールアドレスは必須です',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    labelName: 'パスワード',
    errorMessage: 'メールアドレスは必須です',
  },
};
