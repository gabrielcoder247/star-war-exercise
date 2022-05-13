export const MOVIE_TITLE = "get/MOVIE_TITLE";
export const MOVIES_DETAILS = "get/MOVIES_DETAILS";

// const URL = "https://swapi.dev/api/people/?page=2";
const URL = "https://swapi.dev/api/films/";

export const moviesTitles = (id) => ({
  type: MOVIE_TITLE,
  payload: id,
});

export const moviesDetails = (id) => ({
  type: MOVIES_DETAILS,
  payload: id,
});

export const getMoviesTitle = () => async (dispatch) => {
  const response = await fetch(URL);
  const results = await response.json();
  const objList = results.results;
  const moviesArr = [];
  objList.forEach((item) => {
    const moviesTitle = {
      title: item.title,
    };
    moviesArr.push(moviesTitle);
  });
  dispatch(moviesTitles(moviesArr));
};
getMoviesTitle();

export const getMoviesDetails = () => async (dispatch) => {
  const moviesDetailArr = [];
  const response = await fetch(URL);
  const results = await response.json();
  const objList = results.results;
  objList.forEach((i) => {
    // console.log(i.title);
    const filmList = i.characters;
    const filmArr = [];
    filmList.forEach((x) => {
      filmArr.push(x);
    });
    filmArr.forEach((a) => {
      fetch(a)
        .then((res) => res.json())
        .then((k) => {
          const moviesDetail = {
            name: k.name,
            gender: k.gender,
            height: k.height,
          };
          console.log(moviesDetail);
          moviesDetailArr.push(moviesDetail);
        });
    });
  });
  // const moviesDetailArr = [];
  // objList.forEach((item) => {
  //     const moviesDetail = {
  //         name: item.name,
  //         gender: item.gender,
  //         height: item.height,
  //     };
  //     moviesDetailArr.push(moviesDetail);
  // });
  dispatch(moviesDetails(moviesDetailArr));
};
getMoviesDetails();
//

const initialState = [];

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_TITLE:
      return [...state, ...action.payload];
    case MOVIES_DETAILS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default characterReducer;
