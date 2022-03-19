import styled from 'styled-components';
import ReactModal from 'react-modal';

export const ModalWrapper = styled(ReactModal)`
  &:focus {
    outline: none;
  }
`;

export const ButtonExit = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  width: 32px;
  height: 32px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary.white};
  font-size: 20px;
  box-shadow: 0 1px 5px black;
  border-radius: 8px;
  cursor: pointer;
  z-index: 2;
`;
