import {Link} from 'react-router-dom';
import {NotFoundWrapper, Div404, LinkToMain} from './NotFound.style';

export const NotFound=()=>{
  return(
    <NotFoundWrapper>
      <section>
        <Div404>
          4<div><img src="https://item.kakaocdn.net/do/58119590d6204ebd70e97763ca933baf8f324a0b9c48f77dbce3a43bd11ce785" alt="루피귀여워"/></div>4
        </Div404>
        <LinkToMain>
          <p>페이지를 찾을 수 없습니다.</p>
          <p><Link to="/">메인페이지</Link>로 이동하시겠습니까?</p>
        </LinkToMain>
      </section>
    </NotFoundWrapper>
  )
}