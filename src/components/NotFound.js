import { Link } from "react-router-dom"
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found">
            <p>404 <span>|</span> Page Not Found</p>
            <Link to="/">&larr; Go to Home</Link>
        </div>
    )
}

export default NotFound