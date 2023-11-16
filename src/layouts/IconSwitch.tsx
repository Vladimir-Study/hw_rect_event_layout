export function IconSwitch(props) {
  const { product, allIcons, selected } = props.currentIcon
  const onSwich = props.onSwich
  console.log(selected)

  return (
    <div className="icon_block">
      <div className="icon_block__icon material-icons" onClick={onSwich}>
        { selected }
      </div>
    </div>
  )
}
