import React from 'react'; // Thêm dòng này
import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home Component', () => {
  it('renders the Next.js logo image', () => {
    render(<Home />);
    const logoImage = screen.getByAltText('Next.js logo');
    expect(logoImage).toBeInTheDocument();
  });

  it('renders the instruction list', () => {
    render(<Home />);
    const listItem = screen.getByText(/Get started by editing/i);
    expect(listItem).toBeInTheDocument();
  });

  it('renders the Deploy now button', () => {
    render(<Home />);
    const deployButton = screen.getByRole('link', { name: /Deploy now/i });
    expect(deployButton).toBeInTheDocument();
    expect(deployButton).toHaveAttribute('href', 'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app');
  });

  it('renders the footer with Learn link', () => {
    render(<Home />);
    const learnLink = screen.getByRole('link', { name: /Learn/i });
    expect(learnLink).toBeInTheDocument();
  });
});