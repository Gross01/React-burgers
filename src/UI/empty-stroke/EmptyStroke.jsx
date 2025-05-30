import styles from './EmptyStroke.module.css'
import PropTypes from 'prop-types'

function EmptyStroke ({elementType}) {

    const divClassName = elementType === 'top' ? `${styles.div} ${styles.top}` : elementType === 'bottom' ? `${styles.div} ${styles.bottom}` : `${styles.div}` 

    return (
        <div className={divClassName}>
            <span className='text text_type_main-small'>
                {elementType === 'middle' ? 'Добавьте ингредиенты' : 'Добавьте булку'}
            </span>
        </div>
    )
}

EmptyStroke.propTypes = {
    elementType: PropTypes.string.isRequired
}

export default EmptyStroke