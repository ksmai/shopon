import React from 'react';

interface MockProps {
  children: React.ReactNode;
}

jest.mock('next/link', () => ({ children }: MockProps) => children);
