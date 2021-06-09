const initialState = {
  actors: [],
  favourites: [],
};

// selectors
const actorsSelector = (state) => state.actorsSlice.actors;
const favouritesSelector = (state) => state.favouritesSelector;

// actions
const ACTORS_SUCCESS = "ACTORS_SUCCESS";
const ACTORS_ERROR = "ACTORS_ERROR";

const actorsSuccessAction = (actors, favourites) => ({
  type: ACTORS_SUCCESS,
  actors: actors,
  favourites: favourites,
});

const actorsErrorAction = () => ({
  type: ACTORS_ERROR,
});

// reducers
export const actorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTORS_SUCCESS: {
      return {
        ...initialState,
        actors: action.actors,
        favourites: action.favourites,
      };
    }
    case ACTORS_ERROR: {
      return { ...initialState, actors: [], favourites: [] };
    }
    default: {
      return state;
    }
  }
};
