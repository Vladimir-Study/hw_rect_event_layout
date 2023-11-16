export function ShopCard(props) {
  const { card, style } = props;
  return (
    <div className={`${style.shopCard}`}>
      <p className={`${style.productName}`}>{card.name}</p>
      <p className={`${style.productColor}`}>{card.color}</p>
      <img className={`${style.productImg}`} src={`${card.img}`} alt="" />
      <div className={`${style.productButtomBlock}`}>
        <span className={`${style.productPrice}`}>&#36;{card.price}</span>
        <button className={`${style.productAddBtn}`}>ADD TO CART</button>
      </div>
    </div>
  )
}
