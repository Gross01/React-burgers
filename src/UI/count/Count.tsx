import React, {useMemo} from 'react'
import {useSelector} from 'react-redux'
import styles from './Count.module.css'
import {TConstructorIngredient} from "../../utils/types";

type TCountProps = {
    cardName: string
}

function Count ({cardName}: TCountProps): React.JSX.Element | null {

    //@ts-ignore
    const constructorItems = useSelector(store => store.constructorItems)
    
    const currentItemCount = useMemo(() => {
        return constructorItems.reduce((count: number, item: TConstructorIngredient) => {
            if (item.name === cardName) {
                if (item.bun) {
                    count += 1
                }
                count += 1
            }
            return count
        }, 0)
    }, [constructorItems, cardName])

    return (
        currentItemCount > 0
            ? <div className={`${styles.count} text text_type_digits-default`}>{currentItemCount}</div>
            : null
    )
}

export default Count