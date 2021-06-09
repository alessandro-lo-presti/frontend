import { Card } from "@material-ui/core";

// const imageFromTitle = (title) => {
//   switch (title) {
//     case "Braveheart":
//       return braveheart;
//     case "Pulp Fiction":
//       return pulpfiction;
//     case "Gattaca":
//       return gattaca;
//     case "Harry a Pezzi":
//       return harryapezzi;
//     case "Hot Fuzz":
//       return hotfuzz;
//     case "Goodbye Lenin":
//       return goodbyelenin;
//     default:
//       return braveheart;
//   }
// };

function ActorCard({ name }) {
  return (
    <Card>
      <img src="" alt={name} />
      <div className="card-info">
        <h3>{name}</h3>
      </div>
    </Card>
  );
}

export default ActorCard;
