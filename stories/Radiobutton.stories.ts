import type { Meta, StoryObj } from '@storybook/react';
import Radiobutton from '../components/Radiobutton';
const meta: Meta<typeof Radiobutton> = {
  title: 'components/Radiobutton',
  component: Radiobutton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Radiobutton>;

export const Primary: Story = {
  args: {},
};
