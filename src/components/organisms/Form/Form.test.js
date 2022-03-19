import { render, screen, fireEvent } from 'test-utils';
// import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Form', () => {
  it('Renders the component', () => {
    render(<Form />);
    screen.getByLabelText('Activity');
  });

  it('should correctly set default option', () => {
    render(<Form />);
    expect(screen.getByRole('option', { name: 'None Activity' }).selected).toBe(true);
    expect(screen.getByLabelText('male').checked).toBe(true);
  });

  it('should allow user to change activity', () => {
    render(<Form />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'large' } });
    expect(screen.getByRole('option', { name: 'Large Activity' }).selected).toBe(true);
  });
});
