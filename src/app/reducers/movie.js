const defaultMovie = {};

export default function movie(state = defaultMovie, action) {
  switch (action.type) {
    case 'SET_MOVIE':
      return action.payload;
    default:
      return state;
  }
}