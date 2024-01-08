import { Meta, StoryObj } from '@storybook/react';
import TextForm from '~/components/presentational/Form/TextForm';

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
export const Selectable: Story = {
  args: {
    labelName: 'ダミーデータ',
    errorMessage: 'ダミーデータ',
    // register: ,
  },
};

export const TodoTitleForm: Story = {
  render: () => {
    return (
      <TextForm
        labelName="タイトル"
        errorMessage="エラーメッセージが表示されます。"
        register={undefined}
      />
    );
  },
};
