API: IMDB 
API KEY: k_saglkr13

make 3 fetch requests from IMDB API

1. to display list of TOP 250 movies :
https://imdb-api.com/en/API/Top250Movies/k_saglkr13

2. search for a specific movie on the search box :
search ALL API : https://imdb-api.com/en/API/SearchAll/k_saglkr13/{expresssion}

3. receive ratings by title  ID : 
https://imdb-api.com/en/API/Title/k_saglkr13/{ID}/Ratings,

display the following info for a movie : 
  "id": "tt1375666",
  "title": "Inception",
  "originalTitle": "",
  "fullTitle": "Inception (2010)",
  "type": "Movie",
  "year": "2010",
  "image": "https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6762_AL_.jpg",
  "releaseDate": "2010-07-29",
  "runtimeMins": "148",
  "runtimeStr": "2h 28min",import { connect } from 'react-redux';
  "plot": .....,
"imDbRating": "8.8",

4.  receive rating with following info :
https://imdb-api.com/en/API/Ratings/k_saglkr13/tt1375666

{
  "imDbId": "tt1375666",
  "title": "Inception",
  "fullTitle": "Inception (2010)",
  "type": "Movie",
  "year": "2010",
  "imDb": "8.8",
  "metacritic": "74",
  "theMovieDb": "8.3",
  "rottenTomatoes": "87",
  "tV_com": "8.8",
  "filmAffinity": "8.0",
  "errorMessage": ""
}




<!-notes about state -->

1. use useselector and use dispatch