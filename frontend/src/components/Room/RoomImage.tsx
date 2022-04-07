import { Image } from "./Room.style";
import { ImageType } from "./Room.types";

export const RoomImage = ({ images }: ImageType) => {
  return (
    <Image>
      {images ? (
        <img src={images[0].fullSizeUrl} alt={images[0].caption}></img>
      ) : (
        <img src={'https://img.icons8.com/ios/344/no-image.png'} style={{ width: '30px', height: '30px' }} alt="이미지 없음" ></img>
      )}
    </Image>
  )
};