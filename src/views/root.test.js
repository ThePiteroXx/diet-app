import { render, screen, waitFor } from 'test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Root from './Root';

jest.mock('react-chartjs-2', () => ({
  Doughnut: () => null,
}));

describe('Root', () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it('Renders the component', () => {
    render(<Root />);
    screen.getByText('Calculate Your Caloric Demand');
  });

  it('Display dashboard when user has completed and send form', async () => {
    render(<Root />);
    userEvent.click(screen.getByLabelText('female'));
    userEvent.type(screen.getByTestId('age'), '18');
    userEvent.type(screen.getByPlaceholderText('cm'), '180');
    userEvent.type(screen.getByPlaceholderText('kg'), '80');
    userEvent.selectOptions(screen.getByRole('combobox'), screen.getByRole('option', { name: 'Large Activity' }));
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => expect(window.location.pathname).toBe('/dashboard'));
    await screen.findByText('Caloric Demand:');

    screen.debug();
  });
});
