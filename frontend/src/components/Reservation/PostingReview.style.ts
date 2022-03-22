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
    }

    .submit {
      width: 100%;
      font-size: 24px;
      position: absolute;
      transform: translateX(-20px);
      padding: 20px 0;
    }
    .cancel {
      font-size: 16px;
      position: absolute;
      top: 20px;
      right: 50px;
      width: 100px;
      padding: 15px;
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
      label {
        color: #ccc;
        cursor: pointer;
      }

      & :checked ~ label {
        color: #f90;
      }

      label:hover,
      label:hover ~ label {
        color: #fc0;
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
      height: 150px;
      font-size: 18px;
      border: 0;
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
      input[type='file'] {
        position: absolute;
        width: 0;
        height: 0;
        padding: 0;
        overflow: hidden;
        border: 0;
      }
      label {
        color: #de2e5f;
        cursor: pointer;
      }
    }
  }
`;

export default PostingReviewContainer;
