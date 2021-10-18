import './Card.css'

const Card = ({ className, children }) => {
    let classes = className ? className : ''
    classes += ' card'
    return <div className={classes}>{children}</div>
}

export default Card