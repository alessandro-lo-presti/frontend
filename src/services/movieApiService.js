const movielist = () => {
    return new Promise((resolve, reject) => {
        resolve(
            [
                {
                    id: 1,
                    name: 'Braveheart',
                    views: 1000,
                    rating: 8.5,
                    img: '',
                    end: 1000
                },
                {
                    id: 2,
                    name: 'Pulp Fiction',
                    views: 2500,
                    rating: 9.1,
                    img: '',
                    end: 1000
                },
                {
                    id: 3,
                    name: 'Goodbye Lenin',
                    views: 400,
                    rating: 8.9,
                    img: '',
                    end: 1000
                },
                {
                    id: 4,
                    name: 'Harry a Pezzi',
                    views: 1200,
                    rating: 8.8,
                    img: '',
                    end: 1000
                },
                {
                    id: 5,
                    name: 'Gattaca',
                    views: 700,
                    rating: 9.0,
                    img: '',
                    end: 1000
                },
                {
                    id: 6,
                    name: 'Hot Fuzz',
                    views: 100,
                    rating: 8.2,
                    img: '',
                    end: 1000
                },
            ]
        );
    });
};

export const movieApiService = {
    movieList: movielist
}