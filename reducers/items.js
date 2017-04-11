const item = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        id: action.id,
        title: action.text,
        desc: action.desc,
        quantity: 0
      }


    case 'OPEN_CART':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        open: !state.open
      })

    case 'SET_QUANTITY':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        quantity: action.quantity
      })

    case 'INCREMENT_QUANTITY':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        quantity: state.quantity+1
      })

    case 'DECREMENT_QUANTITY':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        quantity: state.quantity-1
      })

    default:
      return state
  }
}

const items = (state = [], action) => {
  
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action)
      ]

    case 'OPEN_CART':
      return state.map(t =>
        item(t, action)
      )


    case 'SET_QUANTITY':
      return state.map(t =>
        item(t, action)
      )

    case 'INCREMENT_QUANTITY':
      return state.map(t =>
        item(t, action)
      )

    case 'DECREMENT_QUANTITY':
      return state.map(t =>
        item(t, action)
      )
    default:
      return state
  }
}

export default items