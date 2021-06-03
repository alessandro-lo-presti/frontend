import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, makeStyles, Paper, Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import { movieApi } from "../../services/ApiServices";

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

const orderByFieldAndDirection = (field, direction) => (a, b) => {
    let result = 0;
    if (a[field] < b[field]) {
        result = direction === "ASC" ? -1 : +1;
    } else if (a[field] > b[field]) {
        result = direction === "ASC" ? 1 : -1;
    }
    return result;
};

function Ranking() {
    console.log('RANKING');
    const [movies, setMovies] = useState([]);
    const classes= useStyles();
    const [orderingData, setOrderingData] = useState({
        field: 'views',
        direction: 'DESC'
    });

    useEffect(() => {
        movieApi()
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const tableHeaderClick = (e) => {
        console.log('prova');
        const field = e.target.getAttribute('data-field');

        setOrderingData({
            direction: orderingData.field === field ? (orderingData.direction === 'ASC' ? 'DESC' : 'ASC') : 'ASC',
            field: field
        });
    }

    return (
        <Container maxWidth="md">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell onClick={tableHeaderClick} data-field="id">ID</TableCell>
                            <TableCell onClick={tableHeaderClick} data-field="name">Name</TableCell>
                            <TableCell onClick={tableHeaderClick} data-field="rating">Rating</TableCell>
                            <TableCell onClick={tableHeaderClick} data-field="views">Views</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {movies.sort(orderByFieldAndDirection(orderingData.field, orderingData.direction)).map((movie, index) => (
                        <TableRow key={movie.name}>
                            <TableCell component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            <TableCell>{movie.name}</TableCell>
                            <TableCell>{movie.rating}</TableCell>
                            <TableCell>{movie.views}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default Ranking;
