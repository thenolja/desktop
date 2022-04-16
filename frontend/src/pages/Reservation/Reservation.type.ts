export interface ReservationType{
  reservation: {
    userId: string,
    hotelAPIId: number,
    isAgrees: boolean[],
    checkInDate: Date,
    checkOutDate: Date,
    hasCar: boolean,
    cost: number,
    occupancy: number,
    adults: number,
    children: number,
    spec: string,
    username: string,
    phone: string,
  }
}
export interface PaymentType{
  payment: {
    userId: string,
    cost: number
  }
}
export interface HotelType{
  hotel: {
    name: string,
    photo: string
  }
}

export interface SameUserType{
  sameUser: boolean;
}