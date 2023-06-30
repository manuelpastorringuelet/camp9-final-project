import React from 'react';
import '@/app/globals.css';
import { Navbar } from 'components/shared/navbar/Navbar';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col justify-between h-screen">
      {children}

      <footer className="fixed bottom-6 container px-8">
        <Navbar variant={'primary'} />
      </footer>
    </div>
  );
}
