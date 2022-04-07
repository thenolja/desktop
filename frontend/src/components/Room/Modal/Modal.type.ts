export interface BodyType{
  images: [{
    fullSizeUrl: string;
    caption: string;
  }],
  features: [{
    title: string,
    info: string,
  }],
  amenities: string[]
}