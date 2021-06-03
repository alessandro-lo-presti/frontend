import {Link} from "react-router-dom";

function Header() {

    return (
        <header>
            <p>Navbar</p>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/ranking">
                    <li>Classifica</li>
                </Link>
            </ul>
        </header>
    );
}

export default Header;