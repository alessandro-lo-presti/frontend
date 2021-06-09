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
    name: "Joaquin Phoenix",
  },
  {
    id: 2,
    name: "Denzel Washington",
  },
  {
    id: 3,
    name: "Scarlett Johansson",
  },
  {
    id: 4,
    name: "Leonardo di Caprio",
  },
  {
    id: 5,
    name: "Penelope Cruz",
  },
];

// favorites-data
const FAVORITE_DB = [
  {
    user_id: 1,
    favorites: [2, 5],
  },
  {
    user_id: 2,
    favorites: [1, 3, 4],
  },
];

// users
const findUser = (username, password) =>
  USER_DB.find((u) => u.username === username && u.password === password);

// actors
const getActors = () => ACTOR_DB;

// favorites
const getFavoritesByUser = (user) => FAVORITE_DB.find((f) => f.user_id == user);

export const DB_SERVICE = {
  findUser: findUser,
  getActors: getActors,
  getFavoritesByUser: getFavoritesByUser,
};
