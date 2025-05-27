import styles from './CenterConstructorItems.module.css'
import ConstructorItem from '../constructor-item/ConstructorItem'
import {useSelector} from 'react-redux'

function CenterConstructorItems () {

    const constructorItems = useSelector(store => store.constructorItems)

    return (
        <div className={`${styles.centerElements} custom-scrollbar`}>
            {constructorItems.map((item, index) => {

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