import './SectionHeader.css'

const SectionHeader = ({ heading, text }) => {
    return (
        <div className="section-header">
            <h3>{heading}</h3>
            <small>{text}</small>
        </div>
    )
}

export default SectionHeader