import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  .textContent {
    margin-right: 3px;
    color:${props => props.color};
    font-size: 16px;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`