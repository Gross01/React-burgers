import styles from './CenterConstructorItems.module.css'
import ConstructorItem from '../constructor-item/ConstructorItem'
import {useSelector} from 'react-redux'
import {TConstructorIngredient} from "../../utils/types";
import React from 'react'

function CenterConstructorItems (): React.JSX.Element {

    //@ts-ignore
    const constructorItems = useSelector(store => store.constructorItems)

    return (
        <div className={`${styles.centerElements} custom-scrollbar`}>
            {constructorItems.map((item: TConstructorIngredient, index: number) => {

                if (item.bun) {
                    return undefined
                }

                return (
                    <ConstructorItem key={item.id} itemInfo={item} index={index}/>
                  )
               })}
        </div>
    )
}

export default CenterConstructorItems