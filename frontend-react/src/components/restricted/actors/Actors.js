import { useEffect } from "react";
import { ApiService } from "../../../services/ApiServices";
import {
  actorsSelector,
  favouritesSelector,
  actorsSuccessAction,
  actorsErrorAction,
} from "../../../redux/slices/actorsSlice";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  actors: actorsSelector(state),
  favourites: favouritesSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  actorsSuccess: (actors, favourites) =>
    dispatch(actorsSuccessAction(actors, favourites)),
  actorsError: () => dispatch(actorsErrorAction()),
});

function Actors(props) {
  const { actors, favourites, actorsSuccess, actorsError } = props;

  useEffect(() => {
    ApiService.waitActorsApi()
      .then((values) => {
        const result = {};
        values.forEach((value) => {
          if (value.user_id) {
            result.favourites = value;
          } else {
            result.actors = value;
          }
        });
        return result;
      })
      .then((data) => actorsSuccess(data.actors, data.favourites))
      .catch(actorsError);
  }, [actorsSuccess, actorsError]);

  return (
    <div>
      {actors.map((actor) => (
        <div key={actor.name}>{actor.name}</div>
      ))}
      {favourites.map((favourite) => (
        <div key={favourite}>{favourite}</div>
      ))}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Actors);
