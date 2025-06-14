import React, {useMemo} from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'
import {PropTypes} from 'prop-types'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../modal-overlay/ModalOverlay.jsx'
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

function Modal ({title, modalHandler, ...props}) {

    const params = useParams()
    const ingredients = useSelector(state => state.ingredients.items.data)

    const currentIngredient = useMemo(() => {
        return ingredients.filter(item => item['_id'] === params.id)
    }, [params, ingredients])

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

            <ModalOverlay modalHandler={modalHandler}/>

            <div className={`${styles.modal} p-10 pt-15 pb-15`}>
                <div className={styles.modalWrapper}>
                    <h2 className='text text_type_main-large'>{
                        title ? title : currentIngredient[0].name
                    }</h2>
                    <button onClick={modalHandler} type='button' className={styles.button}>
                        <CloseIcon/>
                    </button>
                </div>
                {props.children}
            </div>
        </div>
    ), 
    document.getElementById('modals'))
}

Modal.propTypes = {
    title: PropTypes.string,
    modalHandler: PropTypes.func.isRequired,
}

export default Modal