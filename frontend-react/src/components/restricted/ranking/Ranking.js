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
import { connect } from "react-redux";
import {
  moviesRankCleanAction,
  moviesRankErrorAction,
  moviesRankSelector,
  moviesRankSuccessAction,
} from "../../../redux/slices/rankingSlice";
import { ApiService } from "../../../services/ApiServices";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
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

const mapStateToProps = (state) => ({
  movies: moviesRankSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  moviesRankSuccess: (movies) => dispatch(moviesRankSuccessAction(movies)),
  moviesRankError: () => dispatch(moviesRankErrorAction()),
  moviesRankClean: () => dispatch(moviesRankCleanAction()),
});

function Ranking(props) {
  const classes = useStyles();
  const { movies, moviesRankSuccess, moviesRankError, moviesRankClean } = props;
  const [loading, setLoading] = useState(false);
  const [orderingData, setOrderingData] = useState({
    field: "views",
    direction: "DESC",
  });

  useEffect(() => {
    setLoading(true);

    ApiService.movieApi()
      .then((data) => {
        setLoading(false);
        moviesRankSuccess(data);
      })
      .catch((error) => {
        setLoading(false);
        moviesRankError();
      });

    return () => moviesRankClean();
  }, [moviesRankSuccess, moviesRankError, moviesRankClean]);

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
              <TableCell onClick={() => tableHeaderClick("rating")}>
                Rating
              </TableCell>
              <TableCell onClick={() => tableHeaderClick("views")}>
                Views
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies
              .sort(
                orderByFieldAndDirection(
                  orderingData.field,
                  orderingData.direction
                )
              )
              .map((movie, index) => (
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

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
