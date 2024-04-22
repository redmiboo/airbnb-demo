import styled from "styled-components";

export const LongForItemWrapper = styled.div`
  flex-shrink: 0;
  width: 20%;

  .iner {
    padding: 8px;

    .item-info {
      position: relative;
    }

    .cover {
      width: 100%;
    }
  }

  .bg-cover {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60%;
    background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%)
  }

  .info {
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translate(-50%, 0);
    color: #fff;
    text-align: center;

    .city {
      margin-bottom: 5px;
      font-weight: 700;
      font-size: 18px;
    }

    .price {
      font-size: 14px;
    }
  }
`