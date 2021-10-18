import { Fragment } from "react"
import Footer from "./Footer"
import MainNavigation from "./MainNavigation"

const Layout = ({ children }) => {
    return (
        <Fragment>
            <MainNavigation />
            {children}
            <Footer />
        </Fragment>
    )
}

export default Layout