import type { Meta, StoryObj } from '@storybook/vue3';
import Form from '~/components/Form/Form.vue';

const meta: Meta<typeof Form> = {
  title: 'Form/Form',
  component: Form,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Story = StoryObj<typeof Form>;
