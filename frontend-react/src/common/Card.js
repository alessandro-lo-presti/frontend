function Card(props) {
    return(
        <div className='card'>
            <img src='' alt='' />
            <div className='card-info'>
                <h3>{props.title}</h3>
                <p>{props.time}</p>
            </div>
        </div>
    );
}

export default Card;
