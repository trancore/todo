import { Meta, StoryObj } from '@storybook/react';
import Icon from '~/components/presentational/Icon/Icon';

const meta: Meta<typeof Icon> = {
  title: 'Icon/Icon',
  component: Icon,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof Icon>;

/**
 * パターン
 */
export const Selectable: Story = {
  args: {
    name: 'Check',
    size: 64,
  },
};

export const Check_32_black: Story = {
  render: () => {
    return <Icon name="Check" size={32} color="#000000" />;
  },
};

export const Uncheck_64_red: Story = {
  render: () => {
    return <Icon name="Uncheck" size={64} color="#FF0000" />;
  },
};
