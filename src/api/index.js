export const getMovies = (movieName) => {
  return fetch('http://www.omdbapi.com/?s=' + movieName + '&apikey=e27cde60&page=1')
    .then((response) => response.json())
    .then((responseJson) => {
      console.warn("responseJson", responseJson.Search)
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}