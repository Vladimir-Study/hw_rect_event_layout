import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './layouts/IconSwitch.css'
import { IconSwitch } from './layouts/IconSwitch'
import { Store } from './layouts/Store'
import { CardsView } from './layouts/CardsView'
import { ListView } from './layouts/ListView'

export default function App() {

  const state = Store();
  const [currentIcon, swichIcon] = useState(state.selected)
  const [currentList, showList] = useState(< ListView cards = {state.products} />)
  const onSwich = () => {
    swichIcon(currentIcon !== 'view_list' ? 'view_list' : 'view_module')
    showList(currentIcon === 'view_list' ? < ListView cards = {state.products} /> : < CardsView cards = {state.products} />)
  }
  state.selected = currentIcon
  console.log(currentList)

  return (
    <>
      < IconSwitch currentIcon={ state } onSwich={onSwich} />
      { currentList }
    </>
  )
}