import { useEffect, useRef } from "react";
import { FormArticle, Necessary, SectionBody, SectionTitle } from "./Payment.style";
import { SetReservationType } from "./Payment.type";


const Visiting = ({ reservation, setReservation }:SetReservationType) => {

  const carRef = useRef<HTMLInputElement>();

  // 숙소 방문 수단을 기본적으로 차량으로 세팅
  useEffect(() => {
    carRef.current.checked = reservation.hasCar;
  }, []);

  const handleVisited = () => {
    setReservation({
      ...reservation,
      hasCar: carRef.current.checked
    })
  }

  return (
    <FormArticle>
      <SectionTitle>
        숙소 방문 수단<Necessary>*</Necessary>
      </SectionTitle>
      <SectionBody>
        <div className="visited">
          <input type="radio" ref={carRef} name="visited" id="car" onChange={handleVisited} />
          <label htmlFor="car">차량</label>
        </div>
        <div className="visited">
          <input type="radio" name="visited" id="work" onChange={handleVisited} />
          <label htmlFor="work">도보</label>
        </div>
      </SectionBody>
    </FormArticle>
  )
}

export default Visiting;