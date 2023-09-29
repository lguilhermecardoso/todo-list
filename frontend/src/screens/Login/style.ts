import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom right, #05445E, #D4F1F4);
`;

export const FormWrapper = styled.div`
  background: linear-gradient(to bottom right, #fff, #f1f1f1);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 32px;
  width: 400px;
`;

export const Title = styled.h1`
  color: #05445E;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 32px;
  text-align: center;
`;