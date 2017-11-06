const defaultState = {
  search: false,
  movie: false
};

export default function isLoading(state = defaultState, action) {
  switch (action.type) {
    case 'SET_LOADING_SEARCH':
      return Object.assign({}, state, {
        search: action.payload
      });
    case 'SET_LOADING_MOVIE':
      return Object.assign({}, state, {
        movie: action.payload
      });
    default:
      return state
  }
}