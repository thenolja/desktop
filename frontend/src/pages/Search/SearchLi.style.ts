import styled from 'styled-components';

const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  gap: 20px;

  img {
    max-width: 400px;
    border-radius: 10px;
  }

  .hotel-inform {
    width: 580px;
    padding-left: 10px;

    h3 {
      font-weight: 700;
      margin-bottom: 10px;
    }

    address {
      font-size: 12px;
      color: #333;
      margin-bottom: 15px;
    }

    .neighbourhood {
      display: block;
      font-weight: 700;
      margin-bottom: 5px;
    }

    .landMark-list {
      margin-bottom: 10px;
    }

    .landMark-list li {
      margin-left: 20px;
      font-size: 14px;
      list-style: disc;
      line-height: 20px;
    }

    .general-review {
      font-weight: 700;
    }

    .reviews {
      padding-top: 15px;
      font-size: 12px;
      color: #333;
    }
  }

  .price {
    text-align: right;
    font-weight: 700;
    font-size: 20px;
  }

  .price-policy {
    font-size: 12px;
    color: #333;
    margin-bottom: 40px;
  }

  button {
    padding: 10px 30px;
    border-radius: 35px;
    background-color: #de2e5f;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    margin-bottom: 10px;
  }

  .check-cancle {
    text-align: right;
    font-size: 14px;
    color: green;
  }
`;

export { StyledLi };
