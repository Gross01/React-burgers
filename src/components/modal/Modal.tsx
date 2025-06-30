import React, {useMemo} from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../modal-overlay/ModalOverlay'
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {TIngredient} from "../../utils/types";

type TModalProps = {
    title?: string,
    modalHandler: () => void,
    children?: React.ReactNode,
}

function Modal ({title, modalHandler, children}: TModalProps): React.JSX.Element {

    const params = useParams()
    //@ts-ignore
    const ingredients = useSelector(state => state.ingredients.items.data)

    const currentIngredient = useMemo(() => {
        return ingredients.filter((item: TIngredient) => item['_id'] === params.id)
    }, [params, ingredients])

    React.useEffect(() => {
        const handlerEsc = (e: KeyboardEvent) => {
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
                        <CloseIcon type='primary'/>
                    </button>
                </div>
                {children}
            </div>
        </div>
    ), 
    document.getElementById('modals')!)
}

export default Modal