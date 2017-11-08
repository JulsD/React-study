import { 
  setSortBy,
  setMovieList,
  setMovie,
  setLoadingSearch,
  setLoadingMovie
} from '../app/action'
describe('action should return its type and data', ()=>{
    it('setSortBy sets value to sort by', () => {
        const value = setSortBy('title');
        expect(value).toEqual({type: 'SET_SORT', payload: 'title'})
    });
    it('setMovieList sets search result', () => {
        const value = setMovieList('movies');
        expect(value).toEqual({type: 'SET_SEARCH', payload: 'movies'})
    });
    it('setMovie sets movie', () => {
        const value = setMovie('movie');
        expect(value).toEqual({type: 'SET_MOVIE', payload: 'movie'})
    });
    it('setLoadingSearch sets bool value as loading state to search page', () => {
        const value = setLoadingSearch(true);
        expect(value).toEqual({type: 'SET_LOADING_SEARCH', payload: true})
    });
    it('setLoadingMovie sets bool value as loading state to search page', () => {
        const value = setLoadingMovie(true);
        expect(value).toEqual({type: 'SET_LOADING_MOVIE', payload: true})
    });
});