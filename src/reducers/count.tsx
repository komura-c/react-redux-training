import { INCREMENT, DECREMENT } from '../actions'

const initialState = { value: 0 }

export default function counter(state = initialState, action: { type: any }) {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default:
      return state
  }
}
