import styled from "styled-components";

export const FooterWrapper = styled.div`
 margin-top: 100px;
 border: 1px solid #EBEBEB;

 .wrapper {
  width: 1080px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 48px 24px;

  .service {
    display: flex;
    flex-wrap: wrap;

    .item {
      flex: 1;

      .name {
        margin-bottom: 20px;
        font-weight: 700;
      }

      .list {
        .iten {
        margin-top: 6px;
        font-size: 14px;
        color: #767676;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      }
    }
  }
 }

 .statement {
    margin-top: 30px;
    border-top: 1px solid #EBEBEB;
    padding: 20px;
    color: #767676;
    text-align: center;
  }
`
