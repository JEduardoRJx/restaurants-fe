const baseUrl = "https://code-challenge.spectrumtoolbox.com/api/restaurants";
const headers = {
  headers: {
    Authorization: "Api-Key q3MNxtfep8Gt",
    }
}

export const getRestaurants = async () => {
  const res = fetch(baseUrl, headers);
  if (!res.ok) {
    throw Error ("Restaurants are closed, can't fetch restaurants");
  }
  const restaurants = await res.json();
  console.log('rest', restaurants)

}