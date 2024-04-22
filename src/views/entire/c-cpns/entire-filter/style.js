import styled from "styled-components";


export const FilterWrapper = styled.div`
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 80px;
  
  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 16px;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;

  .filter {
    display: flex;
    /* margin: 0 -8px; */
    .item {
      flex-shrink: 0;
      flex-basis: 120px;
      margin: 0 4px 0 8px;
      padding: 6px 12px;
      border: 1px solid #d8d8d8;
      border-radius: 3px;
      text-align: center;

      &:hover {
        cursor: pointer;
      }
      &.active {
        color: #fff;
        background-color: #00848a;
      }
    }
  }


`