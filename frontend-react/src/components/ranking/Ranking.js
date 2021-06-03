import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, makeStyles, Paper, Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import { movieApi } from "../../services/ApiServices";

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

function Ranking() {
    const [movies, setMovies] = useState([]);
    const classes= useStyles();

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

    const provaClick = () => {
        console.log(this);
    }

    return (
        <Container maxWidth="md">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell onClick={provaClick}>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Rating</TableCell>
                            <TableCell>Views</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {movies.map((movie, index) => (
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
