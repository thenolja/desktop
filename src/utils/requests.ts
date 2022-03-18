import axios from 'axios';

const requestAxios = options =>
  axios
    .request(options)
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.error(error);
    });

const getAllHotelList = async (): Promise<[]> => {
  const options = {
    Method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/properties/list',
    params: {
      destinationId: '759818',
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
      'x-rapidapi-key': '94629a7cb3mshf5f289b5607b657p143b91jsnea007af77478',
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
      checkout_date: '2022-03-27',
      sort_order: 'STAR_RATING_HIGHEST_FIRST',
      checkin_date: '2022-03-26',
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
      'x-rapidapi-key': '432c69262amsh4275073ced663ebp1d4a90jsn306b566d0acd',
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

export { getAllHotelList, getNearHotelList };
