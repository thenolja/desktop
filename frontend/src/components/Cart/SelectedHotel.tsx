import { useState } from 'react';
import { SectionTitle } from '../Payment/Payment.style';
import { FormArticle, Wrapper, SelectedTitle, SelectedImg, SelectedInfo } from './SelectedHotel.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const SelectHotel = () => {
  return (
    <FormArticle>
      <Wrapper>
        <SelectedTitle>
          <SectionTitle>{'역삼 Hotel The Artist'}</SectionTitle>
          <div>{'서울 강남구 테헤란로29길 11 (역삼동)'}</div>
        </SelectedTitle>
        <SelectedImg>
          <div>
            <input type="checkbox" id="selecthotel" />
            <label htmlFor="selecthotel"></label>
          </div>
          <div style={{ width: '100px', height: '100px' }}>
            <img
              src="https://yaimg.yanolja.com/v5/2022/04/12/11/62556077cb45d8.31685668.png"
              alt={'역삼 Hotel The Artist'}
            />
          </div>
          <SelectedInfo>
            <p>역삼 Hotel The Artist</p>
            <p>
              {'2022-04-12'} - {'2022-04-13'}
            </p>
            <p>
              {'체크인 15:00'} - {'체크아웃 13:00'}
            </p>
          </SelectedInfo>
          <button>
            <FontAwesomeIcon icon={faX} size="lg" />
          </button>
        </SelectedImg>
      </Wrapper>
    </FormArticle>
  );
};

export default SelectHotel;
