import { NavLink } from 'react-router-dom'
import './Breadcrumb.css'

const Breadcrumb = ({ linkList }) => {

    return (
        <ul className="breadcrumb">
            <li className="breadcrumb-item">
                <NavLink to="/universities" exact>Paqu</NavLink>
                <span>/</span>
            </li>
            {linkList.map((link, index) => {
                if(index < linkList.length-1) {
                    return (
                        <li 
                            className="breadcrumb-item" 
                            key={'breadcrumb'+index}
                        >
                            <NavLink to={link.path}>{link.name}</NavLink>
                            <span>/</span>
                        </li>
                    )                    
                } else {
                    return <li className="breadcrumb-item" key={'breadcrumb'+index}>{link.name}</li>
                }
            })}
        </ul>
    )
}

export default Breadcrumb