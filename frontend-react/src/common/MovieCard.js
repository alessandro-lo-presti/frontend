import { Card } from "@material-ui/core";
import braveheart from "../assets/images/braveheart.jpg";
import gattaca from "../assets/images/gattaca.jpg";
import goodbyelenin from "../assets/images/goodbyelenin.jpg";
import harryapezzi from "../assets/images/harryapezzi.jpg";
import hotfuzz from "../assets/images/hotfuzz.jpg";
import pulpfiction from "../assets/images/pulpfiction.jpg";

const imageFromTitle = (title) => {
  switch (title) {
    case "Braveheart":
      return braveheart;
    case "Pulp Fiction":
      return pulpfiction;
    case "Gattaca":
      return gattaca;
    case "Harry a Pezzi":
      return harryapezzi;
    case "Hot Fuzz":
      return hotfuzz;
    case "Goodbye Lenin":
      return goodbyelenin;
    default:
      return braveheart;
  }
};

const formatTimer = (end) => {
  return `
    -${("" + Math.floor((end / 1000 / 3600) % 24)).padStart(2, "0")}:${(
    "" + Math.floor((end / 1000 / 60) % 60)
  ).padStart(2, "0")}:${("" + (Math.floor(end / 1000) % 60)).padStart(2, "0")}
`;
};

function MovieCard({ title, end, now }) {
  return (
    <Card>
      <img src={imageFromTitle(title)} alt={title} />
      <div className="card-info">
        <h3>{title}</h3>
        <p className="countdown">{formatTimer(end - now)}</p>
      </div>
    </Card>
  );
}

export default MovieCard;
