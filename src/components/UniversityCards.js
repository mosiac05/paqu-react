import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Fragment } from 'react'

import { shuffleArray } from '../utils'
import './UniversityCards.css'
import Section from "./UI/Section"
import UniversityCardItem from "./UniversityCardItem"
import SectionHeader from './UI/SectionHeader'

const UniversityCards = () => {
    let universities = useSelector(state => state.universities.universities)
    let universityLimit = universities.length < 16 ? universities.length : 16

    universities = shuffleArray(universities.slice(0, universityLimit))
    return (
        <Section>
            {universities.length > 0 &&
            <Fragment>
                <SectionHeader heading="Universities" text="Select your university" />
                <div className="uni-cards">
                    {universities.map((university, index) => (
                        <UniversityCardItem 
                            name={university.name} 
                            id={university.id}
                            key={'universityItem'+index} 
                        />
                    ))}
                </div>
                <NavLink to="/universities" className="uni-cards-btn">All Universities <span>&rarr;</span></NavLink>
            </Fragment>
            }
        </Section>
    )
}

export default UniversityCards