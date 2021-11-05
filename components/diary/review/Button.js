import PropTypes from 'prop-types'


const Button = ({ color, text, onClick }) => {
    return <i onClick={onClick}
                style={{ backgroundColor: color, marginLeft: 4 }}
                className='pencil alternate icon'>{text}</i>
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
