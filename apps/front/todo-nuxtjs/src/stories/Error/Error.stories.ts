import type { Meta, StoryObj } from "@storybook/vue3";
import Error from "~/components/Error/Error.vue";

const meta: Meta<typeof Error> = {
  title: "Error/Error",
  component: Error,
  tags: ["autodocs"],
  // Add your own control here
};
export default meta;

type Story = StoryObj<typeof Error>;

/**
 * パターン
 */
export const Long: Story = {
  args: {
    displayed: true,
    text: "エラーが発生しています。",
  },
};
