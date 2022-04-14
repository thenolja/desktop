import { DetailRoomProps } from "components/Room/Room.types"
import { ChangeEventHandler, FormEventHandler, LegacyRef, MouseEvent, MouseEventHandler } from "react"

export interface ReservationType{
  reservation:{
    userId : string,
    hotelAPIId : number,
    isAgrees : boolean[],
    checkInDate : string,
    checkOutDate : string,
    hasCar :  boolean,
    cost : number,
    occupancy : number,
    adults : number,
    children : number,
    spec : string,
    username :  string,
    phone :  string
  }
}

export interface SelectedRoomType{
  selectedRoom:{
    hotelName: string,
    name: string,
    photo: string,
    checkIn: string,
    checkOut: string,
    cost: number,
    occupancy: number,
    adults: number,
    children: number,
  }
}

export interface FormType extends AgreeType,VisitType, UserInfoType, SelectedRoomType,ReservationType{
  sumbmitBtn: LegacyRef<HTMLButtonElement>,
  handleButton: MouseEventHandler<HTMLButtonElement>,
  handleSubmit: FormEventHandler<HTMLButtonElement>, 
  cost:number
}

export interface UserInfoType{
  username?: string, 
  phone?: string, 
  handleUserClick: MouseEventHandler<HTMLInputElement>, 
  handleUserInput: FormEventHandler<HTMLInputElement>
}

export interface VisitType{
  hasCar?: boolean,
  handleVisited: ChangeEventHandler<HTMLInputElement>
}

export interface AgreeType{
  handleAgree: (isAgrees: boolean[]) => void
}

export interface RoomInfo extends DetailRoomProps{
  startDate: Date, 
  endDate: Date
}