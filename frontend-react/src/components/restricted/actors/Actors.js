import { useEffect, useState } from "react";
import { ApiService } from "../../../services/ApiServices";

function Actors() {
  const [actors, setActors] = useState([]);
  console.log("sono in actors");

  useEffect(() => {
    ApiService.actorApi()
      .then((data) => {
        console.log(data);
        setActors(data);
        console.log(actors);
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      {actors.map((actor) => (
        <li>{actor.name}</li>
      ))}
    </div>
  );
}

export default Actors;
