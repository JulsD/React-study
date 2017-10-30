const defaultSortBy = 'release_year';

export default function serachList(state = defaultSortBy, action) {
  switch (action.type) {
    case 'SET_SORT':
      return action.payload;
    default:
      return state
  }
}