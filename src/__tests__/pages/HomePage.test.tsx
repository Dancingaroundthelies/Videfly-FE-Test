// !STARTERCONF You should delete this page

import { render, screen } from '@testing-library/react';

import HomePage from '@/app/page';

describe('Homepage', () => {
  it('renders a specific paragraph text', () => {
    render(<HomePage />);

    const paragraph = screen.getByText(/Bagaimana Videfly Membantu Bisnismu?/i);

    expect(paragraph).toBeInTheDocument();
  });
});
