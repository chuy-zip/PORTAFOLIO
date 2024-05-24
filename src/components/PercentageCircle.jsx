import '@styles/Percentage.css'
import PropTypes from 'prop-types'

PercentageCircle.propTypes = {
    percentage: PropTypes.string.isRequired
}

function PercentageCircle( { percentage } ) {
    return (
        <div className="circle">
            <div className="inside-content">{percentage}</div>
        </div>
    )
}

export default PercentageCircle