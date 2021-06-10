import mysql from "mysql";

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "movieapp",
});

// users
const findUser = (username, password) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM user WHERE username = "${username}"`,
      (error, result) => {
        if (error) {
          return reject(500);
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
        return reject(500);
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
        return reject(500);
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
          return reject(500);
        }
        if (results.length === 0) {
          return reject(400);
        }
        return resolve(results.map((row) => row.actor_id));
      }
    );
  });
};

const toggleFavouriteActor = (userId, actorId) => {
  const userFavourite = new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM users_actors WHERE user_id = "${userId}"`,
      (error, results) => {
        if (error) {
          return reject(500);
        }
        return resolve(results.map((row) => row.actor_id));
      }
    );
  });

  const userExist = new Promise((resolve, reject) => {
    db.query(`SELECT * FROM user WHERE id = "${userId}"`, (error, results) => {
      if (error) {
        return reject(500);
      }
      if (results.length === 0) {
        return reject(400);
      }
      return resolve(results.map((row) => row.actor_id));
    });
  });

  const actorExist = new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM actor WHERE id = "${actorId}"`,
      (error, results) => {
        if (error) {
          return reject(500);
        }
        if (results.length === 0) {
          return reject(400);
        }
        return resolve(results.map((row) => row.actor_id));
      }
    );
  });

  Promise.all([userFavourite, userExist, actorExist])
    .then((values) => {
      if (!values[0].includes(actorId)) {
        return new Promise((resolve, reject) => {
          db.query(
            `INSERT INTO users_actors (user_id, actor_id) VALUES ('${userId}', '${actorId}')`,
            (error) => {
              if (error) {
                return reject(500);
              }
            }
          );
        });
      } else {
        return new Promise((resolve, reject) => {
          db.query(
            `DELETE FROM users_actors WHERE user_id = "${userId}" AND actor_id = "${actorId}" `,
            (error) => {
              if (error) {
                return reject(500);
              }
            }
          );
        });
      }
    })
    .catch((error) => console.log(error));
};

export const DB_SERVICE = {
  findUser: findUser,
  getMovies: getMovies,
  getActors: getActors,
  getFavouritesByUser: getFavouritesByUser,
  toggleFavouriteActor: toggleFavouriteActor,
};
