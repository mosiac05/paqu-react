import { useHistory } from 'react-router'
import './UniversityCardItem.css'

const UniversityCardItem = ({ id, name }) => {
    const history = useHistory()
    const loadFacultiesHandler = () => {
        history.push(`/universities/${id}/faculties`)
    }

    return (
        <div className="card uni-card-item" onClick={loadFacultiesHandler}>
            <h3>{name}</h3>
        </div>
    )
}

export default UniversityCardItem