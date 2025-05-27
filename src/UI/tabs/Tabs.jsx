import React from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

function Tabs ({current, tabsHandler}) {
    return (
        <div style={{display: 'flex'}}>
            <Tab value='bun' active={current === 'bun'} onClick={tabsHandler}>Булки</Tab>
            <Tab value='sauce' active={current === 'sauce'} onClick={tabsHandler}>Соусы</Tab>
            <Tab value='main' active={current === 'main'} onClick={tabsHandler}>Начинки</Tab>
        </div> 
    )
}

export default Tabs