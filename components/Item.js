import React, { PropTypes } from 'react'
import ButtonContainer from './ButtonContainer'

const Item = ({id, title, desc, open,quantity, onOrderClick,onValueSet,onIncrement,onDecrement}) => (
  <div className="pure-u-1-2 pure-md-1-2 pure-lg-1-2 item">
    <h1>{title}</h1>
    <p>{desc}</p>
    { open ? (
      <ButtonContainer quantity={quantity} onCancelClick={() => onOrderClick(id)} onIncrement={() => onIncrement(id)} onDecrement={() => onDecrement(id)} onValueChange = {(value)=> onValueSet(value,id) }/>
    ) : (
      <input type="button" name="item" value="Order"  className="pure-button order" onClick={() => onOrderClick(id)} />
    )
    }
  </div>
)

Item.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  open:  PropTypes.bool,
  quantity: PropTypes.number,
  onOrderClick : PropTypes.func.isRequired,
  onValueSet : PropTypes.func.isRequired,
  onIncrement : PropTypes.func.isRequired,
  onDecrement : PropTypes.func.isRequired

}

export default Item