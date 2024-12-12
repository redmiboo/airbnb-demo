import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${props => props.theme.isAlpha ? "#fff": "#484848"};

  .btns {
    display: flex;
    box-sizing: content-box;
    align-items: center;

    .btn {
      box-sizing: content-box;
      border-radius: 22px;
      height: 18px;
      line-height: 18px;
      padding: 12px 18px;
      font-weight: 600;
      cursor: pointer;

      &:hover {  
      background-color: #f5f5f5;
    }
    }
  }

  .profile {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius:25px;
    background-color: #fff;
    /* margin-right: 24px; */
    color: ${props => props.theme.text.primaryColor};
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow};

    .panel {
      position: absolute;
      right: 0;
      top: 54px;
      width: 240px;
      background-color: #fff;
      border-radius: 25px;
      /* 形成立体感 */
      box-shadow: 0 0 6px rgba(0,0,0,.2);
      color: #666;

      .top, .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`