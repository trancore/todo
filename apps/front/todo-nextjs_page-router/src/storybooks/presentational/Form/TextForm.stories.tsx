import { Meta, StoryObj } from '@storybook/react';
import Form from '~/components/presentational/Form/Form';
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
    placeholder: 'ダミーデータ',
    errorMessage: 'ダミーデータ',
    // register: ,
  },
  render: (args) => {
    return (
      <Form submit={() => {}}>
        <TextForm {...args}></TextForm>
      </Form>
    );
  },
};

export const TodoTitleForm: Story = {
  render: () => {
    return (
      <Form submit={() => {}}>
        <TextForm
          labelName="タイトル"
          placeholder="やることやることやること"
          errorMessage="エラーメッセージが表示されます。"
          register={undefined}
        />
      </Form>
    );
  },
};
