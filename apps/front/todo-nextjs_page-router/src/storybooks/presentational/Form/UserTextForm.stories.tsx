import { Meta, StoryObj } from '@storybook/react';
import Form from '~/components/presentational/Form/Form';
import UserTextForm from '~/components/presentational/Form/UserTextForm';

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
export const Selectable: Story = {
  args: {
    type: 'text',
    labelName: 'ダミーデータ',
    errorMessage: 'ダミーデータ',
    register: undefined,
  },
  render: (args) => {
    return (
      <Form submit={() => {}}>
        <UserTextForm {...args} />
      </Form>
    );
  },
};
export const Username: Story = {
  render: () => {
    return (
      <Form submit={() => {}}>
        <UserTextForm
          type="text"
          labelName="名前"
          errorMessage="名前は必須です"
          register={undefined}
        />
      </Form>
    );
  },
};
export const Email: Story = {
  render: () => {
    return (
      <Form submit={() => {}}>
        <UserTextForm
          type="email"
          labelName="メールアドレス"
          errorMessage="メールアドレスは必須です"
          register={undefined}
        />
      </Form>
    );
  },
};
export const Password: Story = {
  render: () => {
    return (
      <Form submit={() => {}}>
        <UserTextForm
          type="password"
          labelName="パスワード"
          errorMessage="パスワードは必須です"
          register={undefined}
        />
      </Form>
    );
  },
};
