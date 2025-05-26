import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'
import {useMemo} from 'react'
import styles from './ConstructorItems.module.css'
import {CenterConstructorItems} from '../center-constructor-items/CenterConstructorItems'
import {EmptyStroke} from '../../UI/empty-stroke/EmptyStroke'
import {useDrop} from 'react-dnd'
import {addIngridient} from '../../services/constructor-items/slice'
import {useDispatch, useSelector} from 'react-redux'
import {nanoid} from 'nanoid'

export function ConstructorItems () {

    const constructorItems = useSelector(store => store.constructorItems)

    const dispatch = useDispatch()

    const [{isHover}, dropRef] = useDrop({
      accept: 'ingredients',
      collect: monitor => ({
          isHover: monitor.isOver()
      }),
      drop (item) {
        dispatch(addIngridient({
          ...item,
          id: nanoid()
        }))
      }
    })

    const bun = constructorItems.find(item => item.bun)

    const withoutBun = useMemo(() => {
        return constructorItems.filter(item => !item.bun)
    }, [constructorItems])

    const outline = isHover ? '1px mediumpurple dashed' : 'none'

    return (
        <>
            { bun ? 
                <div className={`${styles.firstElement} pl-8`}>
                    <ConstructorElement
                    type='top'
                    isLocked='true'
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image}
                    />
                </div>
                : 
                <EmptyStroke elementType='top'/>
            }
                
            <div ref={dropRef} style={{borderRadius: '15px', outline: outline}}>
                {withoutBun.length > 0 ? <CenterConstructorItems constructorItems={constructorItems}/> : <EmptyStroke elementType='middle'/>}
            </div>
                
                
            {bun ? 
                <div className={`${styles.lastElement} pl-8`}>
                    <ConstructorElement
                    type='bottom'
                    isLocked='true'
                    text={`${bun.name} (низ)`}
                    price={bun.price}
                    thumbnail={bun.image}
                    />
                </div>
                : 
                <EmptyStroke elementType='bottom'/>
            }  
        </>        
    )
}