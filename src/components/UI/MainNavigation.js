import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import "./MainNavigation.css"

const MainNavigation = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-brand">
                    Paqu
                </Link>
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <NavLink to="/" activeClassName="navbar-active" className="navbar-link" exact>Home</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/universities" activeClassName="navbar-active" className="navbar-link">Universities</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul className="navbar-list">
                    <li className="navbar-item"> <FontAwesomeIcon icon={faPhone} /> (+234) 900 000 000</li>
                    <li className="navbar-item"> <FontAwesomeIcon icon={faEnvelope} /> test@gmail.com</li>
                </ul>
            </div>
        </nav>
    )
}

export default MainNavigation