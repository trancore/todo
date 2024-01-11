import { Meta, StoryObj } from '@storybook/react';
import Form from '~/components/presentational/Form/Form';
import TextArea from '~/components/presentational/Form/TextArea';

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
export const Selectable: Story = {
  args: {
    labelName: 'ダミーデータ',
    errorMessage: 'ダミーデータ',
    register: undefined,
  },
};

export const TodoDescriptionTextArea: Story = {
  render: () => {
    return (
      <Form submit={() => {}}>
        <TextArea
          labelName="説明"
          errorMessage="エラーメッセージが表示されます。"
          register={undefined}
        />
      </Form>
    );
  },
};
