export interface RoomProps extends ImageType{
  id?: number;
  name?: string;
  standardPeople?:number;
  maxPeople?:number;
  originPrice?:number;
  percent?:number;
  saledPrice?:number;
};

interface RatePlanType extends PriceInfoType{
  features: [{
    title: string,
    info: string,
  }]
}

export interface ImageType{
  images?:[{
    fullSizeUrl: string;
    caption: string;
  }]
}

export interface DetailRoomProps extends RoomProps,ImageType{
  ratePlans: RatePlanType[],
  additionalInfo: {
    details: {
      amenities: string[]
    }
  },
  maxOccupancy: { 
    total: number; 
    children: number; 
  }
}

export interface len {
  length: number;
}

export interface OccupancyType {
  maxOccupancy:{
    total: number;
    children: number;
  }
}

export interface PriceInfoType {
  price: {
    nightlyPriceBreakdown?:{
      additionalColumns:{
        heading: string,
        value: string,
      }
    };
    current: string;
    unformattedCurrent:number;
  }
}

export interface RoomInfoType extends OccupancyType, PriceInfoType{
  name: string;
}