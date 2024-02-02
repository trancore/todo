import { Meta, StoryObj } from '@storybook/react';
import Form from '~/components/presentational/Form/Form';
import Name from '~/components/presentational/Form/Name';

const meta: Meta<typeof Name> = {
  title: 'Form/Name',
  component: Name,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof Name>;

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
        <Name {...args} />
      </Form>
    );
  },
};

export const Username: Story = {
  render: () => {
    return (
      <Form submit={() => {}}>
        <Name
          labelName="名前"
          errorMessage="名前は必須です"
          register={undefined}
        />
      </Form>
    );
  },
};
