import PropTypes from 'prop-types';
import { Wrapper } from 'components/molecules/ErrorMessage/ErrorMessage.styles';

const defaultErrorMessage = 'Something went wrong. Please try again later.';

const ErrorMessage = ({ message = defaultErrorMessage }) => {
  return (
    <Wrapper>
      <p>{message}</p>
    </Wrapper>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
