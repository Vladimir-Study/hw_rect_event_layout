import cardsStyle from './CardsView.module.css'
import { ShopCard } from "./ShopCard";

export function CardsView(props) {
  const { cards }  = props;
  console.log(cardsStyle)

  const cardsList = cards.map(card => < ShopCard card={card} style={cardsStyle} />)

  return (
    <div className={`${cardsStyle.cardView}`}>
      {cardsList}
    </div>
  )
}
