let nextTodoId = 0
export const addItem = (text) => {
  return {
    type: 'ADD_ITEM',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}


export const openCart = (id) => {
   return {
    type: 'OPEN_CART',
    id
  }
}


export const setQuantity = (id,quantity)  => {
   return {
    type: 'SET_QUANTITY',
    id,
    quantity
  }
}

export const incrementQuantity = (id) => {
   return {
    type: 'INCREMENT_QUANTITY',
    id
  }
}

export const decrementQuantity = (id) => {
   return {
    type: 'DECREMENT_QUANTITY',
    id
  }
}