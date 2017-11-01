const defaultMovie = {};

export default function search(state = defaultMovie, action) {
  switch (action.type) {
    case 'SET_MOVIE':
      return action.payload;
    default:
      return state;
  }
}