import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { Fragment, useEffect, useState } from "react"

import { getData } from "../utils"
import Hero from "../components/Hero"
import Table from "../components/Table"
import Breadcrumb from "../components/UI/Breadcrumb"

const Faculties = () => {
    const params = useParams()
    const { universityId } = params

    const universities = useSelector(state => state.universities.universities)
    const faculties = useSelector(state => state.faculties.faculties)

    const [universityFaculties, setUniversityFaculties] = useState([])
    
    const universityName = getData(universities, 'name', universityId)
    const columns = ['Faculties'] 

    useEffect(() => {            
        setUniversityFaculties(faculties.filter(faculty => faculty.universityId === universityId))
    }, [faculties, universityId])


    return (
        <Fragment>
            <Hero pageTitle="Faculties" />
            <Breadcrumb linkList={[
                    { name: universityName, path: `/universities/${universityId}/faculties`}, 
                    { name: 'Faculties'}
                ]}
            />            
            <Table 
                title='Faculties' 
                items={universityFaculties} 
                columns={columns}
                pathToLoad="/departments/" />
        </Fragment>
    )
}

export default Faculties