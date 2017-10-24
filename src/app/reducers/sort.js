const defaultSortBy = 'release_year';

export default function serachList(state = defaultSortBy, action) {
  switch (action.type) {
    case 'SET':
      return action.payload;
    default:
      return state
  }
}