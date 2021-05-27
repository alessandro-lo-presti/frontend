const movielist = () => {
    return new Promise((resolve, reject) => {
        resolve(
            [
                {
                    id: 1,
                    name: 'Braveheart',
                    views: 1000,
                    rating: 8.5,
                    img: ''
                },
                {
                    id: 2,
                    name: 'Pulp Fiction',
                    views: 2500,
                    rating: 9.1,
                    img: ''
                },
                {
                    id: 3,
                    name: 'Goodbye Lenin',
                    views: 400,
                    rating: 8.9,
                    img: ''
                },
                {
                    id: 4,
                    name: 'Harry a Pezzi',
                    views: 1200,
                    rating: 8.8,
                    img: ''
                },
                {
                    id: 5,
                    name: 'Gattaca',
                    views: 700,
                    rating: 9.0,
                    img: ''
                },
                {
                    id: 6,
                    name: 'Hot Fuzz',
                    views: 100,
                    rating: 8.2,
                    img: ''
                },
            ]
        );
    });
};

export const movieApiService = () => {
    movieList: movielist
}