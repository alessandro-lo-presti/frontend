import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    makeStyles,
    Paper,
    Container,
    CircularProgress,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, sortRank } from "../../../redux/slices/movieSlice";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function Ranking() {
    const classes = useStyles();
    const { movies, loading } = useSelector(
        (state) => state.movies,
        (state) => state.loading
    );
    const dispatch = useDispatch();
    const [orderingData, setOrderingData] = useState({
        field: "views",
        direction: "DESC",
    });

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    const tableHeaderClick = (field) => {
        setOrderingData({
            direction:
                orderingData.field === field
                    ? orderingData.direction === "ASC"
                        ? "DESC"
                        : "ASC"
                    : "ASC",
            field: field,
        });
        dispatch(sortRank({ movies, orderingData }));
    };

    return !loading ? (
        <Container maxWidth="md">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell data-field="id">ID</TableCell>
                            <TableCell onClick={() => tableHeaderClick("name")}>
                                Name
                            </TableCell>
                            <TableCell
                                onClick={() => tableHeaderClick("rating")}
                            >
                                Rating
                            </TableCell>
                            <TableCell
                                onClick={() => tableHeaderClick("views")}
                            >
                                Views
                            </TableCell>
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
    ) : (
        <CircularProgress />
    );
}

export default Ranking;
