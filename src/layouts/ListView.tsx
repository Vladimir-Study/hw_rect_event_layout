import listStyie from './ListView.module.css'
import { ShopCard } from './ShopCard'

export function ListView(props) {
  const { cards }  = props;

  const cardsList = cards.map(card => < ShopCard card={card} style={listStyie} />)

  return (
    <div className={`${listStyie.listView}`}>
      {cardsList}
    </div>
  )
}
