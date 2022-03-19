import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import AllMeals from './AllMeals';

describe('SearchBar', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it('Renders the component', () => {
    render(<AllMeals />);
    screen.getByText('All meals');
  });

  it('Display meals when you typed into search bar', async () => {
    render(<AllMeals />);
    userEvent.type(screen.getByPlaceholderText('Search'), 'Garlic');
    await screen.findAllByText(/Garlic/);
    screen.debug();
  });
});
