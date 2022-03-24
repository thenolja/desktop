import { memo, useState } from "react";
import styled from "styled-components";
import {Selector, RoomWrapper, Image, RoomInfo, RoomImage, RoomRatePlans, RoomName, SelectBtn, People, ModalBackground, CloseBtn, ModalHeader,ModalBody, RoomAmenity, PriceInfo, DailyPrice, TotalPrice, ModalFooter} from "./Room.style";

const Room = ({room, setSelectedRoom}) => {
  const [modal, setModal] = useState(false);
  console.log(room)
  const handleClick = () => {
    setSelectedRoom(room);
    toggleModal();
  }

  const toggleModal = () =>{
    setModal(!modal);
  }
  
  const RoomImages = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    div{
      width: ${room.images.length*410}px;
      height: fit-content;
    }
  `;

  return(
    <li>
      <ModalBackground hidden={!modal}>
        <RoomAmenity hidden={!modal}>
          <ModalHeader>
            <span>{room.name}</span>
            <CloseBtn onClick={toggleModal}/>
          </ModalHeader>
          <ModalBody>
            <RoomImages>
              <div>
              {
                room.images.map(image=>
                  <RoomImage src={image.fullSizeUrl} title={image.caption} alt={image.caption}></RoomImage>
                )
              }
              </div>
            </RoomImages>
            <div className="ratePlans">
              {room.ratePlans[0].features?.map(feature=><div>
                <span className="title">[{feature.title}]</span>
                <span>{feature.info}</span>
                </div>)}
            </div>
            <div>
              <span className="amenities">제공 어메니티</span>
            {room.additionalInfo.details.amenities.map((amenity:string)=><p>{amenity}</p>)}
            </div>
          </ModalBody>
          <ModalFooter>
            <SelectBtn onClick={handleClick}>이 객실 선택</SelectBtn>
          </ModalFooter>
        </RoomAmenity>
      </ModalBackground>
      <RoomWrapper onClick={toggleModal} >
        <Selector />
        <Image>
          {
          room.images[0]?
            <img src={room.images[0].fullSizeUrl}></img>
          :
            <img src={'https://img.icons8.com/ios/344/no-image.png'} style={{width:"30px", height: "30px"}}></img>
          }
        </Image>
        <RoomInfo>
          <RoomName>{room.name}</RoomName>
          {room.maxOccupancy && <People>기준 {room.maxOccupancy.total}명 / 최대 {room.maxOccupancy.children+room.maxOccupancy.total}명</People>}
          <PriceInfo>
            {
              room.ratePlans[0].price.nightlyPriceBreakdown?
              <>
                <span>{room.ratePlans[0].price.nightlyPriceBreakdown.additionalColumns[1].heading}</span>
                <TotalPrice>{room.ratePlans[0].price.nightlyPriceBreakdown.additionalColumns[1].value}원</TotalPrice>
              </>
              :
              <>
                <span>총 1박</span>
                <TotalPrice>{room.ratePlans[0].price.current}원</TotalPrice>
              </>
            }
            <span>1박당 요금</span>
            <DailyPrice>{room.ratePlans[0].price.current}원</DailyPrice>
          </PriceInfo>
        </RoomInfo>
      </RoomWrapper>
    </li>
  );
};

export default memo(Room);