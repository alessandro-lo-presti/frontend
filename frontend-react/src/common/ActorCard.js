import { Card, makeStyles } from "@material-ui/core";
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

const useStyle = makeStyles({
  card: {
    position: "relative",
  },
  favouriteBox: {
    width: "40px",
    height: "40px",
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    color: "blue",
  },
});

function ActorCard({ actorId, name, favouriteIdList, toggleFavoriteActor }) {
  const classes = useStyle();

  return (
    <Card className={classes.card}>
      <img src={imageFromName(name)} alt={name} />
      <div className="text-center">
        <h3>{name}</h3>
      </div>
      <div className={classes.favouriteBox}>
        {favouriteIdList.includes(actorId) ? (
          <i
            className="fas fa-star"
            onClick={() => toggleFavoriteActor(actorId)}
          ></i>
        ) : (
          <i
            className="far fa-star"
            onClick={() => toggleFavoriteActor(actorId)}
          ></i>
        )}
      </div>
    </Card>
  );
}

export default ActorCard;
