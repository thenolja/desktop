import { SectionTitle } from '../Payment/Payment.style';
import { FormArticle, Wrapper, SelectedTitle, SelectedImg, SelectedInfo } from './SelectedHotel.style';

const SelectHotel = ({ infos }) => {
  return (
    <FormArticle>
      <Wrapper>
        <SelectedTitle>
          <SectionTitle>{infos.hotelName}</SectionTitle>
          <div>{infos.hotelAddress}</div>
        </SelectedTitle>
        <SelectedImg>
          <div>
            <input type="checkbox" id="selecthotel" />
            <label htmlFor="selecthotel"></label>
          </div>
          <div style={{ width: '100px', height: '100px' }}>
            <img src={infos.imageUrl} alt={`${infos.hotelName}이미지`} />
          </div>
          <SelectedInfo>
            <p>{infos.hotelName}</p>
            <p>
              {infos.checkInDate} - {infos.checkOutDate}
            </p>
            <p>{infos.chekInTimeInfo}</p>
          </SelectedInfo>
        </SelectedImg>
      </Wrapper>
    </FormArticle>
  );
};

export default SelectHotel;
