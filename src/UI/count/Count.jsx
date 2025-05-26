import {useMemo} from 'react'
import {useSelector} from 'react-redux'
import styles from './Count.module.css'

function Count ({cardInfo}) {

    const constructorItems = useSelector(store => store.constructorItems)
    
    const currentItemCount = useMemo(() => {
        return constructorItems.reduce((count, item) => {
            if (item.name === cardInfo.name) {
                if (item.bun) {
                    count += 1
                }
                count += 1
            }
            return count
        }, 0)
    }, [constructorItems, cardInfo])

    return (
        currentItemCount > 0 &&
        <div className={`${styles.count} text text_type_digits-default`}>{currentItemCount}</div>
    )
}

export default Count