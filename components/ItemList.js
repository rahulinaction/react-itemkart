import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { openCart, setQuantity, incrementQuantity, decrementQuantity} from '../actions'
//onClick={() => onTodoClick(todo.id)}


const ItemList = ({ items, dispatch }) => (
  <div className="pure-g item-list">
    {items.map(item =>
      <Item
        key={item.id}
        {... item}
        onOrderClick = {(itemId) =>{
            dispatch(openCart(itemId));
        }}

        onValueSet = {(value,itemId) =>{
          dispatch(setQuantity(itemId,value));
          //dispatch(openCart(itemId));
        }}

        onIncrement = {(itemId) =>{
            console.log("came here",itemId);
            dispatch(incrementQuantity(itemId));
        }}

        onDecrement = {(itemId) =>{
            dispatch(decrementQuantity(itemId));
        }}


      />
    )}
  </div>
)

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired).isRequired
}


const mapStateToProps = (state) => {
    return {
        items: state.items,
    };
};



export default connect(mapStateToProps)(ItemList);
