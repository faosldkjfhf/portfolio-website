import { Link } from "react-router-dom";

function IsActive(title, active) {
    return active === title ? 'active' : '';
}

function IsAriaCurrent(title, active) {
    return active === title ? 'page' : '';
}

const NavBarComponent = (
    {
        item = {
            "name": "Home",
            "link": "/home",
            "_id": 234
        },
        current = "Home",
        key = 123
    }
) => {
    return (
        <Link key={item._id} className={`nav-link ${IsActive(item.name, current)}`} aria-current={IsAriaCurrent(item.name, current)} to={item.link}>{item.name}</Link>
    );
}

export default NavBarComponent;