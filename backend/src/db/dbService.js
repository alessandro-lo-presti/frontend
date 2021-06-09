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
const getFavouritesByUser = (userId) =>
    FAVORITE_DB.find((f) => f.user_id == userId);

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
};
