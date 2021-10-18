import Hero from "../components/Hero"
import SearchForm from "../components/SearchForm"
import UniversityCards from "../components/UniversityCards"
import { Fragment } from "react"

const Home = () => {
    return (
        <Fragment>
            <Hero />
            <SearchForm />
            <UniversityCards />
        </Fragment>
    )
}

export default Home