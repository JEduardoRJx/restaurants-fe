import axios from 'axios';

const baseUrl = "https://code-challenge.spectrumtoolbox.com/api/restaurants";
const headers = {
  headers: {
    Authorization: "Api-Key q3MNxtfep8Gt",
    }
}

export const getRestaurants = async () => {
  const res = await axios.get(baseUrl, headers);
  if (res.statusText !== 'OK') {
    throw Error ("Restaurants are closed, can't fetch restaurants");
  }
  const restaurants = res.data.sort((a,b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0
    }
  })
  return restaurants;
}