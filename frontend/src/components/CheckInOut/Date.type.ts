export interface DateType{
  startDate?: Date;
  setCheckInDate?: (value: Date) => void;
  endDate?: Date;
  setCheckOutDate?: (value: Date) => void;
  minDate?: Date;
  setDate?: (value: Date) => void;
}
