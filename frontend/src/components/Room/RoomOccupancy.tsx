import { OccupancyType } from "./Room.types"
import { People } from "./Room.style"

export const RoomOccupancy = ({ maxOccupancy }: OccupancyType): JSX.Element => {
  return (
    <>
      {maxOccupancy && (
        <People>
          기준 {maxOccupancy.total}명 / 최대 {maxOccupancy.children + maxOccupancy.total}명
        </People>
      )}
    </>
  )
}