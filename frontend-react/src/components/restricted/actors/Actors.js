import { useEffect, useState } from "react";
import { ApiService } from "../../../services/ApiServices";
import {
  actorsSelector,
  actorsSuccessAction,
  actorsErrorAction,
} from "../../../redux/slices/actorsSlice";
import { connect } from "react-redux";
import { CircularProgress, Container } from "@material-ui/core";
import ActorCard from "../../../common/ActorCard";

const mapStateToProps = (state) => ({
  actors: actorsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  actorsSuccess: (actors, favourites) =>
    dispatch(actorsSuccessAction(actors, favourites)),
  actorsError: () => dispatch(actorsErrorAction()),
});

function Actors(props) {
  const { actors, actorsSuccess, actorsError } = props;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    ApiService.waitActorsApi()
      .then((values) => {
        const result = {};
        values.forEach((value) =>
          value.user_id ? (result.favourites = value) : (result.actors = value)
        );
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
  }, [actorsSuccess, actorsError]);

  return (
    <Container maxWidth="md">
      <div className="grid-container">
        {!loading ? (
          actors.map((actor) => (
            <ActorCard name={actor.name} actor={actor.id} key={actor.id} />
          ))
        ) : (
          <CircularProgress />
        )}
      </div>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Actors);
