import styles from './EmptyStroke.module.css'

type TEmptyStroke = {
    elementType: string
}

function EmptyStroke ({elementType}: TEmptyStroke) {

    const divClassName = elementType === 'top' ? `${styles.div} ${styles.top}` : elementType === 'bottom' ? `${styles.div} ${styles.bottom}` : `${styles.div}` 

    return (
        <div className={divClassName}>
            <span className='text text_type_main-small'>
                {elementType === 'middle' ? 'Добавьте ингредиенты' : 'Добавьте булку'}
            </span>
        </div>
    )
}

export default EmptyStroke