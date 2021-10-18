import { Fragment } from 'react';
import Hero from "../components/Hero"
import Breadcrumb from '../components/UI/Breadcrumb';
import Table from '../components/Table';
import { useSelector } from 'react-redux';

const UniversitiesList = () => {
    const universities = useSelector(state => state.universities.universities)
    const columns = ['Universities'] 
 
    return (
        <Fragment>
            <Hero pageTitle="Universities" />
            <Breadcrumb linkList={[{ name: 'Universities'}]}  />
            <Table 
                title='Universities' 
                items={universities} 
                columns={columns}
                pathToLoad="/faculties/" />
        </Fragment>
    )
}

export default UniversitiesList