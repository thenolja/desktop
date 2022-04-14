export function reducer(state, action) {
  switch (action.type) {
    case 'SAME_USER':
      return {
        ...state,
        sameUser: action.isSameUser
      }
    case 'HANDLE_RESERVATION':
      return {
        ...state,
        reservation: {
          ...state.reservation,
          [action.id]: action.value
        }
      }
    default:
      return state;
  }
}
