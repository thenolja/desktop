declare module 'qs' {
  interface ParsedQs {
    [key: string]: undefined | string | string[] | ParsedQs | ParsedQs[];
    query: string;
    destinationId: string;
    checkIn: string;
    checkOut: string;
    person: string;
  }
}

export interface hotelTypes {
  id: string;
  name: string;
  optimizedThumbUrls: {
    srpDesktop: string;
  };
  address: {
    streetAddress: string;
    region: string;
    postalCode: string;
  };
  landmarks: { label: string; distance: string }[];
  guestReviews: {
    rating: string;
    badgeText: string;
    total: string;
  };
  ratePlan: {
    price: {
      exactCurrent: string;
    };
  };
}
