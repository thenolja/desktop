import axios from 'axios';
import changeDateFormatToIsoSTring from './dateToISOString';

const today = changeDateFormatToIsoSTring();

const getDestinationIdsByQuery = async query => {
  var options = {
    method: 'GET',
    url: 'https://hotels-com-provider.p.rapidapi.com/v1/destinations/search',
    params: { query: query, currency: 'USD', locale: 'ko_KR' },
    headers: {
      'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com',
      'X-RapidAPI-Key': 'e89d2c82b7msh02cfa53f3f4b497p17dd0djsn3ec1f31d7d41',
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
      'X-RapidAPI-Key': 'e89d2c82b7msh02cfa53f3f4b497p17dd0djsn3ec1f31d7d41',
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
      'X-RapidAPI-Key': 'e89d2c82b7msh02cfa53f3f4b497p17dd0djsn3ec1f31d7d41',
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

const getNearHotelList = async ({ latitude, longitude }): Promise<[]> => {
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

      'X-RapidAPI-Key': 'e89d2c82b7msh02cfa53f3f4b497p17dd0djsn3ec1f31d7d41',
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

      'X-RapidAPI-Key': 'e89d2c82b7msh02cfa53f3f4b497p17dd0djsn3ec1f31d7d41',
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
      'X-RapidAPI-Key': 'c72648c7b6msh4e17692f1a47d60p1e9a12jsn41a04a7a87c9'    },
  };

  return await axios
    .request(options)
    .then(
      ({
        data: {
          data: {
            body: {
              roomsAndRates: { rooms },
            },
          },
        },
      }) => rooms,
    )
    .catch(error => {
      console.error(error);
    });
};

const getReviewTitleData = async (hotelId: string): Promise<[]> => {
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
      'X-RapidAPI-Key': 'c72648c7b6msh4e17692f1a47d60p1e9a12jsn41a04a7a87c9'    },
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

const getReviews = async (hotelId: string, paginationURL?: string): Promise<[]> => {
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
      'X-RapidAPI-Key': 'c72648c7b6msh4e17692f1a47d60p1e9a12jsn41a04a7a87c9'    },
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

const getHotelInfo = async (hotelId: number): Promise<[]> => {
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
      // 'X-RapidAPI-Key': '49b01f6e33mshbbffc3c750bef62p1f83e6jsnc9323f2068e8',
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

const getHotelPhotos = async (hotelId: number): Promise<[]> => {
  let options = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/properties/get-hotel-photos',
    params: { id: hotelId },
    headers: {
      'x-rapidapi-host': 'hotels4.p.rapidapi.com',
      // 'X-RapidAPI-Key': '49b01f6e33mshbbffc3c750bef62p1f83e6jsnc9323f2068e8',
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
