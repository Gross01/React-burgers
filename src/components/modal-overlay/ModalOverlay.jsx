import styles from './ModalOverlay.module.css'
import PropTypes from 'prop-types'

function ModalOverlay ({modalHandler}) {
    return (
        <div className={styles.overlay} onClick={modalHandler}></div>
    )
}

ModalOverlay.propTypes = {
    modalHandler: PropTypes.func.isRequired
}

export default ModalOverlay