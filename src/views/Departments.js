import { useState, Fragment, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"

import { getData } from "../utils"
import Hero from "../components/Hero"
import Table from "../components/Table"
import Breadcrumb from "../components/UI/Breadcrumb"

const Departments = () => {
    const params = useParams()
    const { universityId, facultyId } = params

    const universities = useSelector(state => state.universities.universities)
    const faculties = useSelector(state => state.faculties.faculties)
    const departments = useSelector(state => state.departments.departments)

    const [facultyDepartments, setFacultyDepartments] = useState([])

    const universityName = getData(universities, 'name', universityId)
    const facultyName = getData(faculties, 'name', facultyId)
    const columns = ['Departments'] 

    useEffect(() => {            
        setFacultyDepartments(departments.filter(department => department.facultyId === facultyId))
    }, [departments, facultyId])


    return (
        <Fragment>
            <Hero pageTitle="Departments" />
            <Breadcrumb linkList={[
                    { name: universityName, path: `/universities/${universityId}/faculties`}, 
                    { name: facultyName, path: `/universities/${universityId}/faculties/${facultyId}/departments`}, 
                    { name: 'Departments'}
                ]}  
            />            
            <Table 
                title='Departments' 
                items={facultyDepartments} 
                columns={columns}
                pathToLoad="/courses/" />
        </Fragment>
    )
}

export default Departments