import { FormEventHandler, LegacyRef, MouseEvent, MouseEventHandler } from "react"

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

export interface SetReservationType extends ReservationType{
  setReservation: (value: object) => void
}

export interface UserInfoType extends SetReservationType{
  phone: string
}

export interface FormType extends SetReservationType, SelectedRoomType{
  sumbmitBtn: LegacyRef<HTMLButtonElement>,
  handleClick: MouseEventHandler<HTMLButtonElement>,
  handleSubmit: FormEventHandler<HTMLButtonElement>, 
  phone:string, 
  cost:number
}