import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FAQAccordion } from '@/app/components/FAQAccordion';

describe('FAQAccordion', () => {
  it('shows first answer by default and toggles on click', () => {
    render(<FAQAccordion />);

    expect(screen.getByText(/advanced practice nurse/i)).toBeInTheDocument();

    const secondQuestion = screen.getByRole('button', {
      name: /how long does it typically take to become a crna\?/i
    });

    fireEvent.click(secondQuestion);

    expect(screen.getByText(/full timeline commonly spans several years/i)).toBeInTheDocument();
    expect(screen.queryByText(/advanced practice nurse/i)).not.toBeInTheDocument();
  });
});
