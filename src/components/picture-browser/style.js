import styled from "styled-components";

/*

*/
export const PictureBrowserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(33,33,33);
  opacity: 1;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }


  .list {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    overflow: hidden;

    .control { 
      display: flex;
      justify-content: space-between;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        color: #fff;

      }
    }

    /* 在list使用display:flex..center将pictures置中。pictures中的img使用绝对定位以及t l r =>0 margin:0 auto覆盖整个盒子，
    height: 100%;可以完整显示图片
    img做成绝对定位是为了制作动画
    */
    .pictures {
      position: relative;
      width: 100%;
      height: 100%;
      max-width: 105vh;
      overflow: hidden;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }

      .fade-enter {
        transform: translate(${props => props.$isNext ? "100%" : "-100%"});
        opacity: 0;
      }

      .fade-enter-active {
        opacity: 1;
        transform: translate(0);
        transition: all 150ms ease;
      }

      .fade-exit {  
        opacity: 1;
      }

      .fade-exit-active {
        opacity: 1;
        transition: all 150ms ease;
      }
    }
  }

  .indicator {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 12px;

    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;

      .desc {
        display: flex;
        justify-content: space-between;
        font-weight: 500;
        color: #fff ;

        .toggle {
          cursor: pointer;
        }
      }
    }

    .list {
      margin-top: 3px;
      overflow: hidden;
      transition: height 300ms ease;

      .item {
        margin-right: 15px;
        cursor: pointer;
        
        img {
          opacity: 0.5;
          height: 67px;
        }
      }

      &.active {
        img {
          opacity: 1;
        }
      }
    }
  }
`