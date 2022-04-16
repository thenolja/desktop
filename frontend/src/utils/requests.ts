import axios from 'axios';
import changeDateFormatToIsoSTring from './dateToISOString';

const today = changeDateFormatToIsoSTring();

const getDestinationIdsByQuery = async (query: string) => {
  var options = {
    method: 'GET',
    url: 'https://hotels-com-provider.p.rapidapi.com/v1/destinations/search',
    params: { query: query, currency: 'USD', locale: 'ko_KR' },
    headers: {
      'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com',
      'X-RapidAPI-Key': 'bb35812329mshb3aa1a8c2fbb2dcp1256e7jsn2d2ecc82d02f',
    },
  };

  return axios
    .request(options)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
    });
};

const getSearchHotelsByQuery = async ({ destinationId, checkIn, checkOut, person }): Promise<[]> => {
  const options = {
    Method: 'GET',
    url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/search',
    params: {
      checkin_date: checkIn,
      checkout_date: checkOut,
      sort_order: 'STAR_RATING_HIGHEST_FIRST',
      destination_id: destinationId,
      adults_number: person,
      locale: 'ko_KR',
      currency: 'USD',
      children_ages: '4,0,15',
      price_min: '10',
      star_rating_ids: '3,4,5',
      accommodation_ids: '20,8,15,5,1',
      price_max: '500',
      page_number: '1',
      theme_ids: '14,27,25',
      amenity_ids: '527,2063',
      guest_rating_min: '4',
    },
    headers: {
      'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
      'X-RapidAPI-Key': 'bb35812329mshb3aa1a8c2fbb2dcp1256e7jsn2d2ecc82d02f',
    },
  };

  return await axios
    .request(options)
    .then(
      ({
        data: {
          searchResults: { results },
        },
      }) => results,
    )
    .catch(error => {
      console.log('에러가 났습니다.');
      console.error(error);
    });
};

const getAllHotelList = async (): Promise<[]> => {
  const options = {
    Method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/properties/list',
    params: {
      destinationId: '759818',
      pageNumber: '1',
      pageSize: '20',
      checkIn: today,
      checkOut: today,
      adults1: '1',
      sortOrder: 'STAR_RATING_HIGHEST_FIRST',
      locale: 'ko_KR',
      currency: 'USD',
    },
    headers: {
      'x-rapidapi-host': 'hotels4.p.rapidapi.com',
      'X-RapidAPI-Key': 'bb35812329mshb3aa1a8c2fbb2dcp1256e7jsn2d2ecc82d02f',
    },
  };

  return await axios
    .request(options)
    .then(
      ({
        data: {
          data: {
            body: {
              searchResults: { results },
            },
          },
        },
      }) => results,
    )
    .catch(error => {
      console.log('에러가 났습니다.');
      console.dir(error);
    });
};

const getNearHotelList = ({ latitude, longitude }) => {
  const options = {
    Method: 'GET',
    url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/nearby',
    params: {
      latitude: String(latitude),
      currency: 'USD',
      longitude: String(longitude),
      checkout_date: today,
      sort_order: 'STAR_RATING_HIGHEST_FIRST',
      checkin_date: today,
      adults_number: '1',
      locale: 'ko_KR',
      guest_rating_min: '4',
      star_rating_ids: '3,4,5',
      children_ages: '4,0,15',
      page_number: '1',
      price_min: '10',
      accommodation_ids: '20,8,15,5,1',
      theme_ids: '14,27,25',
      price_max: '500',
      amenity_ids: '527,2063',
    },
    headers: {
      'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
      'X-RapidAPI-Key': 'bb35812329mshb3aa1a8c2fbb2dcp1256e7jsn2d2ecc82d02f',
    },
  };

  return axios
    .request(options)
    .then(
      ({
        data: {
          searchResults: { results },
        },
      }) => results,
    )
    .catch(error => {
      console.error(error);
    });
};

const getLocalHotelList = async (destinationId: number): Promise<[]> => {
  const options = {
    Method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/properties/list',
    params: {
      destinationId: destinationId,
      pageNumber: '1',
      pageSize: '20',
      checkIn: '2020-01-08',
      checkOut: '2020-01-15',
      adults1: '1',
      sortOrder: 'STAR_RATING_HIGHEST_FIRST',
      locale: 'ko_KR',
      currency: 'USD',
    },
    headers: {
      'x-rapidapi-host': 'hotels4.p.rapidapi.com',

      'X-RapidAPI-Key': 'bb35812329mshb3aa1a8c2fbb2dcp1256e7jsn2d2ecc82d02f',
    },
  };

  return await axios
    .request(options)
    .then(
      ({
        data: {
          data: {
            body: {
              searchResults: { results },
            },
          },
        },
      }) => results,
    )
    .catch(error => {
      console.error(error);
    });
};

const getAllRoomList = async (hotelId: string, checkIn: string, checkOut: string): Promise<[]> => {
  const options = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/properties/get-details',
    params: {
      id: hotelId,
      checkIn: checkIn,
      checkOut: checkOut,
      adults1: '2',
      currency: 'KRW',
      locale: 'ko_KR',
    },
    headers: {
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
      'X-RapidAPI-Key': '518b7526b3mshaddce2e28730caep1b9112jsnb8831077905d',
    },
  };

  return await axios
    .request(options)
    .then(
      ({
        data: {
          data: {
            body: { roomsAndRates },
          },
        },
      }) => {
        if (roomsAndRates) return roomsAndRates.rooms;
        else return [];
      },
    )
    .catch(error => {
      console.error(error);
    });
};

const getReviewTitleData = async (hotelId: string): Promise<{ total: number; rating: number }> => {
  const options = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/properties/get-details',
    params: {
      id: hotelId,
      currency: 'KRW',
      locale: 'ko_KR',
    },
    headers: {
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
      'X-RapidAPI-Key': '518b7526b3mshaddce2e28730caep1b9112jsnb8831077905d',
    },
  };

  return await axios
    .request(options)
    .then(
      ({
        data: {
          data: {
            body: {
              guestReviews: { brands },
            },
          },
        },
      }) => brands,
    )
    .catch(error => {
      console.error(error);
    });
};

const getReviews = async (hotelId: string, paginationURL?: string) => {
  const options = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/reviews/v2/list',
    params: {
      hotelId: hotelId,
      reviewOrder: 'date_newest_first',
      tripTypeFilter: 'all',
      paginationURL: paginationURL,
    },
    headers: {
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
      'X-RapidAPI-Key': '518b7526b3mshaddce2e28730caep1b9112jsnb8831077905d',
    },
  };

  return await axios
    .request(options)
    .then(
      ({
        data: {
          data: {
            reviews: {
              body: { reviewContent },
            },
          },
        },
      }) => reviewContent,
    )
    .catch(error => {
      console.error(error);
    });
};

const getHotelInfo = async (hotelId: string): Promise<[]> => {
  const options = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/properties/get-details',
    params: {
      id: hotelId,
      checkIn: '2022-03-28',
      checkOut: '2022-03-29',
      adults1: '1',
      currency: 'KRW',
      locale: 'ko_KR',
    },
    headers: {
      'x-rapidapi-host': 'hotels4.p.rapidapi.com',
      'X-RapidAPI-Key': '518b7526b3mshaddce2e28730caep1b9112jsnb8831077905d',
    },
  };

  return await axios
    .request(options)
    .then(
      ({
        data: {
          data: { body },
        },
      }) => body,
    )
    .catch(error => {
      console.error(error);
    });
};

const getHotelPhotos = async (hotelId: string): Promise<[]> => {
  const options = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/properties/get-hotel-photos',
    params: { id: hotelId },
    headers: {
      'x-rapidapi-host': 'hotels4.p.rapidapi.com',
      'X-RapidAPI-Key': '518b7526b3mshaddce2e28730caep1b9112jsnb8831077905d',
    },
  };

  return axios
    .request(options)
    .then(response => response.data.hotelImages)
    .catch(error => {
      console.error(error);
    });
};

export {
  getDestinationIdsByQuery,
  getSearchHotelsByQuery,
  getAllHotelList,
  getNearHotelList,
  getLocalHotelList,
  getAllRoomList,
  getReviewTitleData,
  getReviews,
  getHotelInfo,
  getHotelPhotos,
};
