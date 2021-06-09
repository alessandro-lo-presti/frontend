import { Card } from "@material-ui/core";
import melgibosn from "../assets/images/actors/melgibosn.jpg";
import ethanhawke from "../assets/images/actors/ethanhawke.jpg";
import danielbruhl from "../assets/images/actors/danielbruhl.jpg";
import woodyallen from "../assets/images/actors/woodyallen.jpg";
import simonpegg from "../assets/images/actors/simonpegg.jpg";
import umathurman from "../assets/images/actors/umathurman.jpg";

const imageFromName = (name) => {
  switch (name) {
    case "Mel Gibson":
      return melgibosn;
    case "Uma Thurman":
      return umathurman;
    case "Ethan Hawke":
      return ethanhawke;
    case "Woody Allen":
      return woodyallen;
    case "Simon Pegg":
      return simonpegg;
    case "Daniel Bruhl":
      return danielbruhl;
    default:
      return melgibosn;
  }
};

function ActorCard({ name }) {
  return (
    <Card>
      <img src={imageFromName(name)} alt={name} />
      <div className="card-info">
        <h3>{name}</h3>
      </div>
    </Card>
  );
}

export default ActorCard;
