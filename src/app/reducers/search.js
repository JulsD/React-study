const defaultSearch = {};

export default function search(state = defaultSearch, action) {
  switch (action.type) {
    case 'SET_SEARCH':
      return Object.assign({}, state, {
        movies: action.payload
      })
    default:
      return state;
  }
}