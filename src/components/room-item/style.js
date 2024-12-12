import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';

/*padding百分比是相对于块的宽度的  */
export const RoomItemWrapper = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 8px;
  width: ${props => props.$itemWidth};

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

  .bottom {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 10px;
    .count {
      margin-left: 4px;
    }
    .extra {
        color: ${props => props.verifyColor};
      }
  }

  .slider {
    position: relative;

    &:hover {
      .control {
        display: flex;
      }
    }
    
    .control {
      display: none;
      justify-content: space-between;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      color: #fff;
      cursor: pointer;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);

        &.right {
          background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        }
      }


  }

  .indicator {
    position: absolute;
    left:0;
    right: 0;
    z-index: 9;
    width: 30%;
    bottom: 10px;
    margin: 0 auto;

    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20%;

      .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #fff;

        &.active {
          width: 8px;
          height: 8px;
        }
      }
    }
  }
}
  
`

export const useStyles = makeStyles({ // css 对象
  root: {
    fontSize: "12px",
    color: "#00848A",
    marginRight: "-1px"
  }
});