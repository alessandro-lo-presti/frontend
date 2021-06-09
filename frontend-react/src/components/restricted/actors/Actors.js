import { useEffect } from "react";
import { ApiService } from "../../../services/ApiServices";

function Actors() {
  useEffect(() => {
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

export default Actors;
