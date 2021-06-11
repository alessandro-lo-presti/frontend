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
const ACTORS_CLEAN = "ACTORS_CLEAN";
const UPDATE_FAVOURITES = "UPDATE_FAVOURITES";

export const actorsSuccessAction = (actors, favourites) => ({
  type: ACTORS_SUCCESS,
  actors: actors,
  favourites: favourites,
});

export const actorsErrorAction = () => ({
  type: ACTORS_ERROR,
});

export const actorsCleanAction = () => ({
  type: ACTORS_CLEAN,
});

export const updateFavouritesAction = (favourites) => ({
  type: UPDATE_FAVOURITES,
  favourites: favourites,
});

// reducers
export const actorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTORS_SUCCESS: {
      return {
        ...state,
        actors: action.actors,
        favourites: action.favourites,
      };
    }
    case ACTORS_ERROR:
    case ACTORS_CLEAN: {
      return { ...state, actors: [], favourites: [] };
    }
    case UPDATE_FAVOURITES: {
      return { ...state, favourites: action.favourites };
    }
    default: {
      return state;
    }
  }
};
