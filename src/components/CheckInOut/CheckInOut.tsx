import {CheckInOutWrapper, Check, Date, SVG, Contour} from "./CheckInOut.style";

const CheckInOut = () => {
  return(
    <CheckInOutWrapper>
      <div>
        <Check>
          체크인
          <Date>
            3월 16일(수)
            <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M7 10L12 15 17 10z"></path>
            </SVG>
          </Date>
        </Check>
        <Contour />
        <Check>
          체크아웃
          <Date>
            3월 17일(목)
            <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M7 10L12 15 17 10z"></path>
            </SVG>
          </Date>
        </Check>
      </div>
    </CheckInOutWrapper>
  )
};

export default CheckInOut;