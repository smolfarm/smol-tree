import { getIcon } from '../icon-mapper'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('getIcon', () => {
  const testIcons = [
    'twitter', 'linkedin', 'github', 'home', 
    'discord', 'spotify', 'youtube'
  ]

  testIcons.forEach(icon => {
    it(`returns an icon for ${icon}`, () => {
      const iconElement = getIcon(icon);
      const { container } = render(iconElement);
      
      expect(container.firstChild).toBeTruthy();
      expect(container.firstChild).toHaveClass('w-8 h-8 mr-3');
    })
  })

  it('returns null for unknown icon', () => {
    const iconElement = getIcon('nonexistent');
    expect(iconElement).toEqual(<></>)
  })
})