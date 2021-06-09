const initialState = {
  actors: [],
  favourites: [],
};

// selectors
export const actorsSelector = (state) => state.actorsSlice.actors;
export const favouritesSelector = (state) => state.actorsSlice.favourites;

// actions
const ACTORS_SUCCESS = "ACTORS_SUCCESS";
const ACTORS_ERROR = "ACTORS_ERROR";

export const actorsSuccessAction = (actors, favourites) => ({
  type: ACTORS_SUCCESS,
  actors: actors,
  favourites: favourites.favourites,
});

export const actorsErrorAction = () => ({
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
