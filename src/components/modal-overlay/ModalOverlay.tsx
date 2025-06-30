import styles from './ModalOverlay.module.css'

function ModalOverlay ({modalHandler}: {modalHandler: () => void}): React.JSX.Element {
    return (
        <div className={styles.overlay} onClick={modalHandler}></div>
    )
}

export default ModalOverlay