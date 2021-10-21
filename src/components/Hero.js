import './Hero.css'
import heroImage from '../assets/images/file-system.svg'
import { Fragment } from 'react'
import { useLocation } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'

const Hero = ({ pageTitle }) => {
    const location = useLocation()
    const showHome = location.pathname === '/'
    return (
        <div className="hero">
            { showHome && (
                <Fragment>
                    <div className="hero-right">
                        <h2>Explore &amp; Download Past Question Papers</h2>
                        <p>Search for past exams and test question papers by university, faculty, department and course.</p>
                    </div>
                    <img src={heroImage} alt="Paqu" />
                </Fragment>
            )}
            { !showHome && (
                <div className="hero-main">
                    <h1>Paqu</h1>
                    <h3> <FontAwesomeIcon icon={faBuilding} />  {pageTitle}</h3>
                </div>
            )}
        </div>
    )
}

export default Hero