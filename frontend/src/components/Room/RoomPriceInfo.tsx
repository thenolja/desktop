import { PriceInfo, DailyPrice, TotalPrice } from './Room.style';
import { PriceInfoType } from './Room.types';

const TotalPriceDiv = (nightly: string, price: string) => {
  return (
    <>
      <span>{nightly}</span>
      <TotalPrice>{price}원</TotalPrice>
    </>
  )
}

export const RoomPriceInfo = ({ price }: PriceInfoType): JSX.Element => {
  return (
    <PriceInfo>
      {price.nightlyPriceBreakdown ?
        TotalPriceDiv(price.nightlyPriceBreakdown.additionalColumns[1].heading,
          price.nightlyPriceBreakdown.additionalColumns[1].value)
        :
        TotalPriceDiv('총 1박', price.current)
      }
      <span>1박당 요금</span>
      <DailyPrice>{price.current}원</DailyPrice>
    </PriceInfo>
  )
}