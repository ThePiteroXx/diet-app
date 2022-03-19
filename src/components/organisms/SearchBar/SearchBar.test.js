import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ReactModal from 'react-modal';

import SearchBar from './SearchBar';

ReactModal.setAppElement(document.createElement('div'));

describe('SearchBar', () => {
  it('Renders the component', () => {
    render(<SearchBar />);
    screen.getByPlaceholderText('Search');
  });

  it('Display filter', () => {
    render(<SearchBar />);
    const buttonFilter = screen.getByTestId('button-filter');
    userEvent.click(buttonFilter);
    screen.getByText('Add filter');
  });
});
