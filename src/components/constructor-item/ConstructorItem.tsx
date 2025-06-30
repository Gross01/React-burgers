import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {useDispatch} from 'react-redux'
import styles from './ConstructorItem.module.css'
import {removeIngredient} from '../../services/constructor-items/slice'
import {useDrag, useDrop} from 'react-dnd'
import {moveItem} from '../../services/constructor-items/slice'
import {TConstructorIngredient} from "../../utils/types";
import React from "react";

type IConstructorItemProps = {
    itemInfo: TConstructorIngredient,
    index: number
}

function ConstructorItem ({itemInfo, index}: IConstructorItemProps): React.JSX.Element {
    const dispatch = useDispatch()

    const [, dragRef] = useDrag({
        type: 'constructorItem',
        item: {index: index},
    })

    const [, dropRef] = useDrop({
        accept: 'constructorItem',
        hover: (item: {index: number}) => {
            if (item.index !== index) {
                dispatch(moveItem({fromIndex: item.index, toIndex: index}))
            }
            item.index = index
        }
    })

    return (
        <div className={`${styles.item} pr-2`} id={itemInfo.id} ref={(node: HTMLDivElement | null) => {
            if (node) {
                dragRef(dropRef(node))
            }
        }}>
            <button className={styles.drag}><DragIcon type="primary" /></button>
            <ConstructorElement
                text={itemInfo.name}
                price={itemInfo.price}
                thumbnail={itemInfo.image}
                handleClose={() => dispatch(removeIngredient(itemInfo.id))}
            />
        </div>
    )
}

export default ConstructorItem