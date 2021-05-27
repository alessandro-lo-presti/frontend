const movielist = () => {
    return new Promise((resolve, reject) => {
        resolve(
            [
                {
                    id: 1,
                    name: 'Braveheart',
                    views: 1000,
                    rating: 8.5,
                    img: '../img/gattaca.jpg',
                    end: new Date("06-10-2021 00:00")
                },
                {
                    id: 2,
                    name: 'Pulp Fiction',
                    views: 2500,
                    rating: 9.1,
                    img: '../img/gattaca.jpg',
                    end: new Date("06-10-2021 00:00")
                },
                {
                    id: 3,
                    name: 'Goodbye Lenin',
                    views: 400,
                    rating: 8.9,
                    img: '../img/gattaca.jpg',
                    end: new Date("06-10-2021 00:00")
                },
                {
                    id: 4,
                    name: 'Harry a Pezzi',
                    views: 1200,
                    rating: 8.8,
                    img: '../img/gattaca.jpg',
                    end: new Date("06-10-2021 00:00")
                },
                {
                    id: 5,
                    name: 'Gattaca',
                    views: 700,
                    rating: 9.0,
                    img: '../img/gattaca.jpg',
                    end: new Date("06-10-2021 00:00")
                },
                {
                    id: 6,
                    name: 'Hot Fuzz',
                    views: 100,
                    rating: 8.2,
                    img: '../img/gattaca.jpg',
                    end: new Date("06-10-2021 00:00")
                },
            ]
        );
    });
};

export const movieApiService = {
    movieList: movielist
}