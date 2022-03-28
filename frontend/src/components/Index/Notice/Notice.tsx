import notice from '/src/assets/notice.png';
import { StyledDl } from './Notice.style';

const Notice = () => {
  return (
    <StyledDl>
      <div>
        <dt>
          <img src={notice} alt="" /> 공지사항
        </dt>
        <dd>정기점검 시간 연장으로 고속버스 탑승에 불편을 드려 대단히 죄송합니다</dd>
      </div>
    </StyledDl>
  );
};

export default Notice;
