import { render, screen } from '@testing-library/react'
import LinkButton from '../LinkButton'
import configuration from '../../../linkconfig.json'
import '@testing-library/jest-dom'

describe('LinkButton', () => {
  const mockProps = {
    url: 'https://example.com',
    name: 'Test Link',
    icon: 'github'
  }

  it('renders with correct text and href', () => {
    render(<LinkButton {...mockProps} />);
    const linkElement = screen.getByRole('link');
    
    expect(linkElement).toHaveTextContent('Test Link');
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
  })

  it('applies configuration styles', () => {
    render(<LinkButton {...mockProps} />);
    const linkElement = screen.getByRole('link');
    
    expect(linkElement).toHaveClass(configuration.buttons.bgColor);
    expect(linkElement).toHaveClass(configuration.buttons.hoverColor);
    expect(linkElement).toHaveClass(configuration.buttons.fontFamily);
    expect(linkElement).toHaveClass(configuration.buttons.textColor);
  })
})