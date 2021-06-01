import { Card } from '@material-ui/core';

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

function movieCard(props) {
    return(
        <Card className='card'>
            <img src={imageFromTitle(props.title)} alt={props.title} />
            <div className='card-info'>
                <h3>{props.title}</h3>
                <p>{props.time}</p>
            </div>
        </Card>
    );
}

export default movieCard;
