import {useMemo} from 'react'
import {useSelector} from 'react-redux'
import styles from './Count.module.css'
import PropTypes from 'prop-types'

function Count ({cardName}) {

    const constructorItems = useSelector(store => store.constructorItems)
    
    const currentItemCount = useMemo(() => {
        return constructorItems.reduce((count, item) => {
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
        currentItemCount > 0 &&
        <div className={`${styles.count} text text_type_digits-default`}>{currentItemCount}</div>
    )
}

Count.propTypes = {
    cardName: PropTypes.string.isRequired
}

export default Count