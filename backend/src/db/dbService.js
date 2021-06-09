// users-data
const USER_DB = [
  {
    id: 1,
    username: "ale",
    password: "123456",
  },
  {
    id: 2,
    username: "davide",
    password: "654321",
  },
];

// actors-data
const ACTOR_DB = [
  {
    id: 1,
    name: "Mel Gibson",
  },
  {
    id: 2,
    name: "Uma Thurman",
  },
  {
    id: 3,
    name: "Daniel Bruhl",
  },
  {
    id: 4,
    name: "Woody Allen",
  },
  {
    id: 5,
    name: "Ethan Hawke",
  },
  {
    id: 6,
    name: "Simon Pegg",
  },
];

// favorites-data
const FAVORITE_DB = [
  {
    user_id: 1,
    favourites: [2, 5],
  },
  {
    user_id: 2,
    favourites: [1, 3, 4],
  },
];

// users
const findUser = (username, password) =>
  USER_DB.find((u) => u.username === username && u.password === password);

// actors
const getActors = () => ACTOR_DB;

// favorites
const getFavouritesByUser = (user) =>
  FAVORITE_DB.find((f) => f.user_id == user);

const toggleFavouriteActor = (user, actor) => {
  let result = false;

  if (ACTOR_DB.find((a) => a.id == actor)) {
    const user_f = FAVORITE_DB.find((f) => f.user_id == user);
    const indexFavourites = user_f.favourites.indexOf(actor);

    indexFavourites > -1
      ? user_f.favourites.splice(indexFavourites, 1)
      : user_f.favourites.push(actor);
    result = true;
  }

  return result;
};

export const DB_SERVICE = {
  findUser: findUser,
  getActors: getActors,
  getFavouritesByUser: getFavouritesByUser,
  toggleFavouriteActor: toggleFavouriteActor,
};
