import { useEffect, useState } from "react";
import { ApiService } from "../../../services/ApiServices";
import {
  actorsSelector,
  actorsSuccessAction,
  actorsErrorAction,
  favouritesSelector,
  updateFavouritesAction,
  actorsCleanAction,
} from "../../../redux/slices/actorsSlice";
import { connect } from "react-redux";
import { CircularProgress, Container, Typography } from "@material-ui/core";
import ActorCard from "../../../common/ActorCard";

const mapStateToProps = (state) => ({
  actors: actorsSelector(state),
  favouriteIdList: favouritesSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  actorsSuccess: (actors, favourites) =>
    dispatch(actorsSuccessAction(actors, favourites)),
  actorsError: () => dispatch(actorsErrorAction()),
  actorsClean: () => dispatch(actorsCleanAction()),
  updateFavourites: (favourites) =>
    dispatch(updateFavouritesAction(favourites)),
});

function Actors(props) {
  const {
    actors,
    favouriteIdList,
    actorsSuccess,
    actorsError,
    actorsClean,
    updateFavourites,
  } = props;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    Promise.all([ApiService.actorApi(), ApiService.favoriteApi()])
      .then((values) => {
        const result = {};
        result.actors = values[0];
        result.favourites = values[1];
        return result;
      })
      .then((data) => {
        setLoading(false);
        actorsSuccess(data.actors, data.favourites);
      })
      .catch(() => {
        setLoading(false);
        actorsError();
      });

    return () => actorsClean();
  }, [actorsSuccess, actorsError, actorsClean]);

  const toggleFavoriteActor = (actorId) => {
    ApiService.toggleFavouriteApi(actorId)
      .then(updateFavourites)
      .catch((e) => console.log(e));
  };

  return (
    <Container maxWidth="md">
      <div className={actors.length > 0 ? "grid-container" : "text-center"}>
        {!loading ? (
          actors.length > 0 ? (
            actors.map((actor) => (
              <ActorCard
                name={actor.name}
                actorId={actor.id}
                favouriteIdList={favouriteIdList}
                key={actor.id}
                toggleFavoriteActor={toggleFavoriteActor}
              />
            ))
          ) : (
            <Typography variant="h2" component="h2">
              Nessun risultato
            </Typography>
          )
        ) : (
          <CircularProgress />
        )}
      </div>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Actors);
