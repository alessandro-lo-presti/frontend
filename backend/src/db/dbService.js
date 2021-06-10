import mysql from "mysql";

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "movieapp",
});

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
const findUser = (username, password) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM user WHERE username = "${username}"`,
      (error, result) => {
        if (error) {
          return reject(error);
        }
        if (result.length === 0 || result[0].password != password) {
          return reject(400);
        }
        return resolve(result[0].id);
      }
    );
  });
};

// movies
const getMovies = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM movie", (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
  });
};

// actors
const getActors = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM actor", (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
  });
};

// favorites
const getFavouritesByUser = (userId) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM users_actors WHERE user_id = "${userId}"`,
      (error, results) => {
        if (error) {
          return reject(error);
        }
        if (results.length === 0) {
          return reject(400);
        }
        return resolve(results.map((row) => row.actor_id));
      }
    );
  });
};
// FAVORITE_DB.find((f) => f.user_id == userId);

const toggleFavouriteActor = (userId, actorId) => {
  let result = false;

  const userFavouriteData = FAVORITE_DB.find((f) => f.user_id == userId);

  if (userFavouriteData && ACTOR_DB.find((a) => a.id == actorId)) {
    const index = userFavouriteData.favourites.indexOf(actorId);
    if (index >= 0) {
      userFavouriteData.favourites.splice(index, 1);
    } else {
      userFavouriteData.favourites.push(actorId);
    }
    result = true;
  }

  return result;
};

export const DB_SERVICE = {
  findUser: findUser,
  getActors: getActors,
  getFavouritesByUser: getFavouritesByUser,
  toggleFavouriteActor: toggleFavouriteActor,
  getMovies: getMovies,
};
