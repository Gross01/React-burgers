import styles from './ModalOverlay.module.css'

function ModalOverlay ({modalHandler}) {
    return (
        <div className={styles.overlay} onClick={modalHandler}></div>
    )
}

export default ModalOverlay