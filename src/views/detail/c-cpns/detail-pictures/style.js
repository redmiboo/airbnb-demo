import styled from "styled-components";

export const DEtailPicturesWrapper = styled.div`
  position: relative;
  .img-wrapper {
    display: flex;
    height: 600px;
    background-color: #000;

  }

  .img-wrapper-left, .img-wrapper-right {
    width: 50%;
    height: 100%;

    .item {
      position: relative;
      overflow: hidden;
      cursor: pointer;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;  
      }

      .cover {
        position: absolute;
        z-index: 9;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        /* opacity指定了一个元素后面的背景的被覆盖程度，因此要设置background */
        background: rgba(0, 0, 0, 0.2);
        opacity: 0.5;
        transition: opacity 200ms ease;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }

        .cover {
          opacity: 0;
        }
      }
    }
  }

  .img-wrapper-left {
    background-color: #222;

    .item {
      //让父盒子占满整个left高度，以便让img的height为100%时可以占满整个left高度
      height: 100%;
    }
  }

  .img-wrapper-right {
    display: flex;
    flex-wrap: wrap;
    background-color: #333;

    .item {
      height: 50%;
      width: 50%;
    }
  }


  .show-btn {
    position: absolute;
    z-index: 9;
    bottom: 15px;
    right: 15px;
    padding: 6px 15px;
    border-radius: 4px;
    line-height: 15px;
    background-color: #fff;
    cursor: pointer;
  }
`