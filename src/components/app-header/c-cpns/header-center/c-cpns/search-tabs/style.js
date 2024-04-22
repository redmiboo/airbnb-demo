import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.isAlpha ? "#fff": "#222"};

  .subtitle {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 16px;
    width: 64px;
    height: 20px;
    color: ${props => props.theme.isAlpha ? "#fff" : "#222"};
    font-size: 16px;
    text-align: center;
    cursor: pointer;

    &.active .bottom {
      position: absolute;
      top: 28px;
      left: 0;
      width: 64px;
      height: 2px;
      
      background-color: ${props => props.theme.isAlpha ? "#fff": "#333"};
    }
  }
`