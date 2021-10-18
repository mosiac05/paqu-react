import { useState, Fragment, useEffect } from "react"
import Hero from "../components/Hero"
import Table from "../components/Table"
import Breadcrumb from "../components/UI/Breadcrumb"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { getData } from "../utils"

const Courses = () => {
    const params = useParams()
    const { universityId, facultyId, departmentId } = params

    const universities = useSelector(state => state.universities.universities)
    const faculties = useSelector(state => state.faculties.faculties)
    const departments = useSelector(state => state.departments.departments)
    const courses = useSelector(state => state.courses.courses)

    const [departmentCourses, setDepartmentCourses] = useState([])
    
    const universityName = getData(universities, 'name', universityId)
    const facultyName = getData(faculties, 'name', facultyId)
    const departmentName = getData(departments, 'name', departmentId)
    const columns = ['Courses'] 

    useEffect(() => {            
        setDepartmentCourses(courses.filter(course => course.deptId === departmentId))
    }, [courses, departmentId])


    return (
        <Fragment>
            <Hero pageTitle="Courses" />
            <Breadcrumb linkList={[
                    { name: universityName, path: `/universities/${universityId}/faculties`}, 
                    { name: facultyName, path: `/universities/${universityId}/faculties/${facultyId}/departments`}, 
                    { name: departmentName, path: `/universities/${universityId}/faculties/${facultyId}/departments/${departmentId}/courses`}, 
                    { name: 'Courses'}
                ]}  
            />            
            <Table 
                title='Courses' 
                items={departmentCourses} 
                columns={columns}
                pathToLoad="/question-papers/" />
        </Fragment>
    )
}

export default Courses