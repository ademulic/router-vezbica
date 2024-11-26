import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    const isActive = ({ isActive }) =>
          isActive ? "active" : "";
    return (  
        <nav>
            <h1>React Router</h1>
            <div className="links">
                <NavLink to="/" className={isActive}>Home</NavLink>
                <NavLink to="/about" className={isActive}>About</NavLink>
                <NavLink to="/contact" className={isActive}>Contact</NavLink>
            </div>
        </nav> );
}
 
export default Navbar;