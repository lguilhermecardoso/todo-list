import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  background-color: #05445E;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  padding: 12px 24px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #189AB4;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #05445E;
  }

  &:disabled {
    background-color: #D4F1F4;
    cursor: not-allowed;
  }
`;