import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  position: relative;

  .control {
    z-index: 9;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    background-color: #fff;
    border-color: #fff;
    /* border: 2px solid #484848; */
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);
    cursor: pointer;
  }
  
  .control.left {
    left: 0;
    transform: translate(-50%, -50%);
  }

  .control.right {
    right: 0;
    transform: translate(50%, -50%);
  }

  .scroll {
    overflow: hidden;

    .scroll-content {
      display: flex;
      transition: transform 250ms ease;
    }
  }
`