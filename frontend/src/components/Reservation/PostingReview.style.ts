import styled from 'styled-components';

const PostingReviewContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.55);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  section {
    left: 50%;
    top: 10%;
    width: 800px;
    position: inherit;
    padding: 20px;

    background: #fff;
    transform: translateX(-50%);
    h2 {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
      text-align: center;
      padding: 20px;
      border-bottom: 1px solid black;
    }
    .submit,
    .cancel {
      background-color: #de2e5f;
      cursor: pointer;
      color: #fff;
      font-weight: 700;
      width: 100px;
      padding: 15px;
      font-size: 16px;
    }

    .submit {
      position: absolute;
      bottom: 20px;
      left: 50%;
    }
    .cancel {
      position: absolute;
      top: 20px;
      right: 50px;
    }

    dl {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin-bottom: 25px;
    }
    dd,
    dt {
      margin-top: 20px;
      width: 40%;
    }
    dt {
      color: gray;
    }

    .rating-container {
      margin: 20px 0;
      display: flex;
      width: 200px;
      flex-direction: row-reverse;
      justify-content: space-around;
      text-align: center;
      input {
        display: none;
      }
    }
    legend {
      font-size: 20px;
    }
    label {
      font-size: 24px;
      color: #f2f2f2;
    }

    textarea {
      margin: 10px 0;
      width: 100%;
      height: 200px;
      font-size: 16px;
      border: 1px solid gray;
      padding: 10px;
    }

    .img-container {
      width: 200px;
      height: 200px;

      margin-bottom: 150px;
      img {
        margin: 20px 0;
        border: 1px solid gray;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

export default PostingReviewContainer;
