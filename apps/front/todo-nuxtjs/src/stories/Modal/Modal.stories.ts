import type { Meta, StoryObj } from '@storybook/vue3';

import Modal from '~/components/Modal/Modal.vue';

const meta: Meta<typeof Modal> = {
  title: 'Modal/Modal',
  component: Modal,
  tags: ['autodocs'],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof Modal>;

/**
 * パターン
 */
export const Default: Story = {
  args: {},
};
