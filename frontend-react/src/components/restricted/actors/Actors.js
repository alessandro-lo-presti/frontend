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
  console.log(actors, favourites);

  useEffect(() => {
    const result = {};

    ApiService.waitActorsApi().then((values) => {
      values.forEach((value) => {
        if (value.user_id) {
          console.log(value);
          //   result.favourites = value;
        } else {
          //   result.actors = value;
          console.log(value);
        }
      });
    });
  }, []);

  return <div>actors</div>;
}

export default connect(mapStateToProps, mapDispatchToProps)(Actors);
