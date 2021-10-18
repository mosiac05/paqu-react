import './Section.css'

const Section = ({ className, children }) => {
    let classes = className ? className : ''
    classes += ' section'
    return (
        <section className={classes}>
            {children}
        </section>
    )
}

export default Section