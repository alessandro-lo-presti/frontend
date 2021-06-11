import mysql from "mysql";

let pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "movieapp",
});

// users
const findUser = (username, password) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM user WHERE username = "${username}" AND password = "${password}"`,
      (error, result) => {
        if (error) {
          reject();
        } else if (result && result.length === 0) {
          resolve();
        } else {
          resolve(result[0].id);
        }
      }
    );
  });
};

// movies
const getMovies = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM movie", (error, results) => {
      if (error) {
        reject();
      } else {
        resolve(results);
      }
    });
  });
};

// ranking
const getRanking = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM movie JOIN ranking ON movie.id = ranking.id",
      (error, results) => {
        if (error) {
          reject();
        } else {
          resolve(results);
        }
      }
    );
  });
};

// actors
const getActors = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM actor", (error, results) => {
      if (error) {
        reject();
      } else {
        resolve(results);
      }
    });
  });
};

// favorites
const getFavouritesByUser = (userId) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM users_actors WHERE user_id = "${userId}"`,
      (error, results) => {
        if (error) {
          reject();
        } else if (results && results.length === 0) {
          resolve();
        } else {
          resolve(results.map((row) => row.actor_id));
        }
      }
    );
  });
};

// toggle
const userFavourites = (userId) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM users_actors WHERE user_id = "${userId}"`,
      (error, results) => {
        if (error) {
          reject();
        } else {
          resolve(results.map((row) => row.actor_id));
        }
      }
    );
  });
};

const userExist = (userId) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM user WHERE id = "${userId}"`,
      (error, results) => {
        if (error) {
          reject();
        } else if (results && results.length === 0) {
          resolve();
        } else {
          resolve(userId);
        }
      }
    );
  });
};

const actorExist = (actorId) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM actor WHERE id = "${actorId}"`,
      (error, results) => {
        if (error) {
          reject();
        } else if (results && results.length === 0) {
          resolve();
        } else {
          resolve(actorId);
        }
      }
    );
  });
};

const toggleFavouriteActor = (favourites, userId, actorId) => {
  if (!favourites.includes(actorId)) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO users_actors (user_id, actor_id) VALUES ('${userId}', '${actorId}')`,
        (error) => {
          if (error) {
            reject();
          } else {
            favourites.push(actorId);
            resolve(favourites);
          }
        }
      );
    });
  } else {
    return new Promise((resolve, reject) => {
      pool.query(
        `DELETE FROM users_actors WHERE user_id = "${userId}" AND actor_id = "${actorId}" `,
        (error) => {
          if (error) {
            reject();
          } else {
            favourites.splice(favourites.indexOf(actorId), 1);
            resolve(favourites);
          }
        }
      );
    });
  }
};

export const DB_SERVICE = {
  findUser: findUser,
  getMovies: getMovies,
  getRanking: getRanking,
  getActors: getActors,
  getFavouritesByUser: getFavouritesByUser,
  toggleFavouriteActor: toggleFavouriteActor,
  userFavourites: userFavourites,
  userExist: userExist,
  actorExist: actorExist,
};
