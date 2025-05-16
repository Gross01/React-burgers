import React from 'react'
import ReactDOM from 'react-dom'
import styles from './ModalOverlay.module.css'
import Modal from '../modal/Modal'
import {PropTypes} from 'prop-types'

function ModalOverlay ({title, Content, modalHandler, ...props}) {

    React.useEffect(() => {
        const handlerEsc = (e) => {
            if (e.key === `Escape`) {
                modalHandler()
            }
        }

        document.addEventListener('keydown', handlerEsc)

        return () => {
            document.removeEventListener('keydown', handlerEsc)
        }
    }, [modalHandler])

    return ReactDOM.createPortal((
        <div className={styles.wrapper}>
            <div className={styles.overlay} onClick={modalHandler}></div>
            <Modal modalHandler={modalHandler} title={title} Content={Content} {...props}/>
        </div>
    ), 
    document.getElementById('modals'))
}

ModalOverlay.propTypes = {
    title: PropTypes.string,
    modalHandler: PropTypes.func.isRequired,
    Content: PropTypes.func.isRequired,
}

export default ModalOverlay