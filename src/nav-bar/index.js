import items from "./items.json";
import NavBarComponent from "./NavBarComponent";
import { Link } from 'react-router-dom';

const NavBar = (
    {
        current = 'Home',
    }
) => {
    return (
        <nav className="navbar navbar-expand">
            <div className="navbar-nav">
                <Link className="font-bold navbar-brand" to="/home">Kevin Liu</Link>
                {items.map((item) => (
                    <NavBarComponent item={item} current={current} />
                ))}
            </div>
        </nav>
    );
}

export default NavBar;