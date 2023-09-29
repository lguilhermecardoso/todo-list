import styled from 'styled-components'

interface ContainerProps {
  done?: boolean
}
export const Container = styled.div<ContainerProps>`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props =>  props.done ? 0.6 : 1};

  & + div {
    border-left: 1px solid rgba(0,0,0,0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 4px;
      background: #75E6DA;
      border: 0;
      cursor: pointer;
    }

  }

  ul {
    margin-top: 30px;
  } 
`

export const CreateCardArea = styled.div`
  margin-top: 10px;
`

export const CreateCardContainer = styled.div`
  position: relative;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 14px;
  border-top: 32px solid rgba(230, 236, 245, 0.5);
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);

  header {
    position: absolute;
    top: -22px;
    width: 90%;
    span {
      font-size: 14px;
      font-weight: bold;
      margin-left: 10px;
    }
  }
  input {
    width: 100%;
    border: 0;
    background: transparent;
    border-bottom: 1px solid #eee;
    padding: 4px;
  }

  textarea {
    border: 0;
    background: transparent;
    border-bottom: 1px solid #eee;
    padding: 4px;
    font-family: 'Roboto', sans-serif;
  }
`

export const Footer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  div {
    cursor: pointer;

    &:hover {
      opacity: 0.2;
    }

    
  }
  button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }
`