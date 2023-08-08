import { Navbar } from '../components/shared/navbar/Navbar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Navbar> = {
  title: 'components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    active: true,
  },
};

export const Secondary: Story = {};
