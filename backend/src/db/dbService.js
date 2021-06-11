import mysql from "mysql";

let db = null;
const getDbConnection = () => {
  console.log("dbconnection", db ? db.state : "");

  db =
    db && db.state === "authenticated"
      ? db
      : mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "",
          database: "movieapp",
        });

  db.on("error", function (err) {
    console.log(err.code); // 'ER_BAD_DB_ERROR'
    db = null;
  });

  return db;
};

// users
const findUser = (username, password) => {
  return new Promise((resolve, reject) => {
    getDbConnection().query(
      `SELECT * FROM user WHERE username = "${username}"`,
      (error, result) => {
        if (error) {
          console.log(error);
          // throw new Error(error);
        }
        if (result.length === 0 || result[0].password != password) {
          return resolve();
        }
        return resolve(result[0].id);
      }
    );
  });
};

// movies
const getMovies = () => {
  return new Promise((resolve, reject) => {
    getDbConnection().query("SELECT * FROM movie", (error, results) => {
      if (error) {
        console.log(error);
        //throw new Error(error);
      }
      return resolve(results);
    });
  });
};

// ranking
const getRanking = () => {
  return new Promise((resolve, reject) => {
    getDbConnection().query(
      "SELECT * FROM movie JOIN ranking ON movie.id = ranking.id",
      (error, results) => {
        if (error) {
          console.log(error);
          // throw new Error(error);
        }
        return resolve(results);
      }
    );
  });
};

// actors
const getActors = () => {
  return new Promise((resolve, reject) => {
    getDbConnection().query("SELECT * FROM actor", (error, results) => {
      if (error) {
        console.log(error);
      }
      return resolve(results);
    });
  });
};

// favorites
const getFavouritesByUser = (userId) => {
  return new Promise((resolve, reject) => {
    getDbConnection().query(
      `SELECT * FROM users_actors WHERE user_id = "${userId}"`,
      (error, results) => {
        if (error) {
          console.log(error);
        }
        if (results.length === 0) {
          return resolve();
        }
        return resolve(results.map((row) => row.actor_id));
      }
    );
  });
};

const toggleFavouriteActorCheck = (userId, actorId) => {
  const userFavourite = new Promise((resolve, reject) => {
    getDbConnection().query(
      `SELECT * FROM users_actors WHERE user_id = "${userId}"`,
      (error, results) => {
        if (error) {
          console.log(error);
        }
        return resolve(results.map((row) => row.actor_id));
      }
    );
  });

  const userExist = new Promise((resolve, reject) => {
    getDbConnection().query(
      `SELECT * FROM user WHERE id = "${userId}"`,
      (error, results) => {
        if (error) {
          console.log(error);
        }
        if (results.length === 0) {
          return resolve();
        }
        return resolve(userId);
      }
    );
  });

  const actorExist = new Promise((resolve, reject) => {
    getDbConnection().query(
      `SELECT * FROM actor WHERE id = "${actorId}"`,
      (error, results) => {
        if (error) {
          console.log(error);
        }
        if (results.length === 0) {
          return resolve();
        }
        return resolve(actorId);
      }
    );
  });

  return [userFavourite, userExist, actorExist];
};

const toggleFavouriteActor = (favourites, userId, actorId) => {
  if (!favourites.includes(actorId)) {
    return new Promise((resolve, reject) => {
      getDbConnection().query(
        `INSERT INTO users_actors (user_id, actor_id) VALUES ('${userId}', '${actorId}')`,
        (error) => {
          if (error) {
            console.log(error);
          }
          favourites.push(actorId);
          return resolve(favourites);
        }
      );
    });
  } else {
    return new Promise((resolve, reject) => {
      getDbConnection().query(
        `DELETE FROM users_actors WHERE user_id = "${userId}" AND actor_id = "${actorId}" `,
        (error) => {
          if (error) {
            console.log(error);
          }
          favourites.splice(favourites.indexOf(actorId), 1);
          return resolve(favourites);
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
  toggleFavouriteActorCheck: toggleFavouriteActorCheck,
};
