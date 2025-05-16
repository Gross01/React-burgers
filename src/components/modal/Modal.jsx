import styles from './Modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function Modal ({title, modalHandler, Content, ...props}) {
    return (
        <div className={`${styles.modal} p-10 pt-15 pb-15`}>
            <div className={styles.wrapper}>
                <h2 className='text text_type_main-large'>{title}</h2>
                <button onClick={modalHandler} type='button' className={styles.button}>
                    <CloseIcon/>
                </button>
            </div>
            <Content {...props}/>
        </div>
    )
}

export default Modal