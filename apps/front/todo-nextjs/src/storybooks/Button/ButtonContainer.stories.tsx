import { Meta, StoryObj } from '@storybook/react';
import ButtonContainer from '~/components/Button/ButtonContainer';

const meta: Meta<typeof ButtonContainer> = {
  title: 'Button/ButtonContainer',
  component: ButtonContainer,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof ButtonContainer>;
