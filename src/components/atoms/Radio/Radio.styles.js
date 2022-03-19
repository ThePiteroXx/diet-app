import styled from 'styled-components';

export const LabelRadio = styled.label`
  display: block;
  padding: 4px 5px;
  font-size: clamp(12px, 4vw, ${({ theme }) => theme.fontSize.m});
  font-weight: 600;
  width: clamp(65px, 20vw, 79px);
  background-color: ${({ theme }) => theme.colors.primary.white};
  color: ${({ theme }) => theme.colors.secondary.text};
  border: 1px solid ${({ theme }) => theme.colors.primary.gray};
  border-radius: 15px;
  text-align: center;
  text-transform: capitalize;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  margin: 10px;

  input[type='radio']:checked + ${LabelRadio} {
    background-color: ${({ theme }) => theme.colors.secondary.green};
    color: ${({ theme }) => theme.colors.primary.white};
  }
`;
