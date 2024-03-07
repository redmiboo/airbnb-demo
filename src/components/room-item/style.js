import styled from "styled-components";

/*padding百分比是相对于块的宽度的  */
export const RoomItemWrapper = styled.div`
  box-sizing: border-box;
  padding: 8px;
  width: 25%;
  .inner {
    width: 100%;
  }

  .cover {
      position: relative;
      box-sizing: border-box;
      padding: 66.66% 8px 0;
      border-radius: 3px;
      overflow: hidden;
    
      img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    }

  .desc {
    margin: 10px 0 5px;
    font-weight: 600;
    font-size: 12px;
    color: ${props => props.verifyColor};
  }

  .name { 
    display: -webkit-box;
    font-weight: 600;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }
`