import { Meta, StoryObj } from '@storybook/react';
import TabButton from '../components/shared/buttons/TabButton';

const meta: Meta<typeof TabButton> = {
  title: 'TabButton',
  component: TabButton,
  tags: ['autodocs'],
  argTypes: {
    handleClick: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof TabButton>;

export const New: Story = {
  args: {
    children: 'new',
  },
};

export const NewInactive: Story = {
  args: {
    children: 'new',
    inactive: true,
  },
};

export const Pending: Story = {
  args: {
    children: 'pending',
  },
};

export const PendingInactive: Story = {
  args: {
    children: 'pending',
    inactive: true,
  },
};

export const Closed: Story = {
  args: {
    children: 'closed',
  },
};

export const ClosedInactive: Story = {
  args: {
    children: 'closed',
    inactive: true,
  },
};

// my polls
export const MyPolls: Story = {
  args: {
    children: 'my polls',
  },
};

export const MyPollsInactive: Story = {
  args: {
    children: 'my polls',
    inactive: true,
  },
};
