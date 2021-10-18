import { NavLink, Link } from 'react-router-dom'
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
                    <li className="navbar-item">(+234) 900 000 000</li>
                    <li className="navbar-item">test@gmail.com</li>
                </ul>
            </div>
        </nav>
    )
}

export default MainNavigation