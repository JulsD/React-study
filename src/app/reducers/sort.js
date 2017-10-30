const defaultSortBy = 'release_date';

export default function serachList(state = defaultSortBy, action) {
  switch (action.type) {
    case 'SET_SORT':
      return action.payload;
    default:
      return state
  }
}