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

const findUser = (username, password) =>
    USER_DB.find((u) => u.username === username && u.password === password);

export const DB_SERVICE = {
    findUser: findUser,
};
