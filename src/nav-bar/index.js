import items from "./items.json";
import NavBarComponent from "./NavBarComponent";

const NavBar = (
    {
        current = 'Home',
    }
) => {
    return (
        <nav className="navbar navbar-expand">
            <div className="navbar-nav">
                <span className="font-bold navbar-brand">Kevin Liu</span>
                {items.map((item) => (
                    <NavBarComponent item={item} current={current} />
                ))}
            </div>
        </nav>
    );
}

export default NavBar;