const userlist = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, username: "mario", lastname: "rossi" },
                { id: 2, username: "giuseppe", lastname: "verdi" },
                { id: 3, username: "giuseppe", lastname: "verdi" },
            ]);
        }, 3000);
    });
};

export const ApiService = {
    userList: userlist,
};
