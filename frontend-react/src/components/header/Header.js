import { Container, makeStyles } from "@material-ui/core";
import {Link} from "react-router-dom";  

const useStyles = makeStyles({
    header: {
        height: "70px",
        padding: "0 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    brand: {
        fontSize: "20px"
    },
    list: {
        display: "flex",
        listStyle: "none" 
    },
    link: {
    marginLeft: "10px",
      color: 'white',
      textDecoration: 'none'
    },
});

function Header() {
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.header}>
            <p className={classes.brand}>Navbar</p>
            <ul className={classes.list}>
                <Link to="/" className={classes.link}>
                    <li>Home</li>
                </Link>
                <Link to="/ranking" className={classes.link}>
                    <li>Classifica</li>
                </Link>
            </ul>
        </Container>
    );
}

export default Header;