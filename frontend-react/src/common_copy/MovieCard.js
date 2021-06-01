import { Card } from '@material-ui/core';
import { Component } from 'react';

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

const timer = (end) => {
    return `
    -${("" + Math.floor(((end) / 1000 / 3600) % 24)).padStart(
        2,
        "0"
    )}:${("" + Math.floor(((end) / 1000 / 60) % 60)).padStart(
    2,
    "0"
)}:${("" + (Math.floor((end) / 1000) % 60)).padStart(2, "0")}
`;
}

class MovieCard extends Component {

    componentDidMount() {
        console.log('movieCard componentDidMount');
    }

    componentDidUpdate() {
        console.log('movieCard componentDidMount');
    }

    componentWillUnmount() {
        console.log('movieCard componentWillUnmount');
    }

    
    render() {
        console.log('movieCard render');
        return (
        <Card className='card'>
            <img src={imageFromTitle(this.props.title)} alt={this.props.title} />
            <div className='card-info'>
                <h3>{this.props.title}</h3>
                <p className='countdown'>{timer(this.props.end)}</p>
            </div>
        </Card>
        );
    }
}

export default MovieCard;
