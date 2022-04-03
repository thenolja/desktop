import styled from "styled-components";

const NotFoundWrapper=styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 0;

  section{
    background-color: transparent;
    margin: 0px auto;
    width: 500px;
    text-align: center;
  }
`;

const Div404=styled.div`
  font-size: 200px;
  font-weight: 700;
  color: #de2e5f;
  margin-bottom: 50px;

  div{
    position: relative;
    display: inline-block;
    width: 120px;
    height: 150px;
    border-radius: 50%;
    border: 25px solid #333;
    
    img{
      /* display: inline-block;
      width: 200px; */
      width: 110px;
      height: 110px;
      position: absolute;
      left:50%;
      top:50%;
      z-index: -1;
      transform: translate(-50%,-50%);
    }
  }
`;

const LinkToMain=styled.div`
  font-size: 20px;
  
  p{
    line-height: 32px;

    a{
      color: #44d;
      font-size: 22px;
      font-weight: 700;
    }
  }
`;

export {NotFoundWrapper, Div404, LinkToMain};