import { useEffect } from 'react';
import { ModalWrapper, ButtonExit } from './Modal.styles';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

// Set overlay background colar
ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.3)';

const Modal = ({ isOpen, handleClose, children, withExit }) => {
  // Set body to not move when scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    }

    return () => (document.body.style.overflowY = 'auto');
  }, [isOpen]);
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
      {children}
      {withExit && <ButtonExit onClick={handleClose}>X</ButtonExit>}
    </ModalWrapper>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.element,
};

export default Modal;
