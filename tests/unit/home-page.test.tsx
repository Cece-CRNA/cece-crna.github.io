import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('Home page', () => {
  it('renders luxury homepage hero and core ctas', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading', { name: /a refined path to crna success/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /book a private consultation/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /schedule a mock interview/i })).toBeInTheDocument();
  });
});
