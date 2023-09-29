import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 14px;
  border-top: 32px solid rgba(230, 236, 245, 0.5);
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);

  span > svg {
    position: absolute;
    right: 10px;
    top: -26px;
    cursor: pointer;
  }


  header {
    position: absolute;
    top: -22px;
    span {
      font-size: 14px;
      font-weight: bold;
      margin-left: 10px;
    }
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }
`

export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${props => props.color};
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