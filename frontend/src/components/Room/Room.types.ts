export interface RoomProps {
  id?: number;
  name?: string;
  standardPeople?:number;
  maxPeople?:number;
  originPrice?:number;
  percent?:number;
  saledPrice?:number;
};

interface ratePlantype{
  features: [{
    title: string,
    info: string
  }]
}

export interface ModalType {
  room: {
    images: [{
      fullSizeUrl: string;
      caption: string;
    }],
    name: string,
    ratePlans: ratePlantype[],
    additionalInfo: {
      details: {
        amenities: string[]
      }
    }
  },
  modal: boolean,
  toggleModal: () => void;
  handleClick: () => void;
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
    },
    current: string
  }
}

export interface RoomInfoType extends OccupancyType, PriceInfoType{
  name: string;
}