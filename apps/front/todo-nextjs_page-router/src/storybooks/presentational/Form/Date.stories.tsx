import { Meta, StoryObj } from '@storybook/react';
import Date from '~/components/presentational/Form/Date';
import Form from '~/components/presentational/Form/Form';

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
export const Selectable: Story = {
  args: {
    labelName: 'ダミーデータ',
    errorMessage: 'ダミーデータ',
    register: undefined,
  },
  render: (args) => {
    return (
      <Form submit={() => {}}>
        <Date {...args} />
      </Form>
    );
  },
};

export const TodoDeadline: Story = {
  render: () => {
    return (
      <Form submit={() => {}}>
        <Date
          labelName="期限"
          errorMessage="エラーメッセージが表示されます。"
          register={undefined}
        />
      </Form>
    );
  },
};
