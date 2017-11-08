import sort from '../app/reducers/sort'
import search from '../app/reducers/search'
import movie from '../app/reducers/movie'
import isLoading from '../app/reducers/isLoading'
describe('Reducer should return state',()=>{
    it('If action type SET_SORT sort reducer return sortBy state', () => {
        let state = 'release_date';
        state = sort(state, {type:'SET_SORT', payload: 'test'})
        expect(state).toEqual('test')
    });
    it('If action type other than SET_SORT sort reducer return prev state', () => {
        let state = 'release_date';
        state = sort(state, {type:'SET_SORT', payload: 'test'})
        expect(state).toEqual('test')
    });
    
    it('If action type SET_SEARCH search reducer return movieList', () => {
        let state = {movies: 'test'};
        state = search(state, {type: 'SET_SEARCH', payload: 'movies array'})
        expect(state).toEqual({movies: 'movies array'})
    });
    it('If action type other than SET_SEARCH search reducer return prev state', () => {
        let state = {movies: 'test'};
        state = search(state, {type: 'SET', payload: 'movies array'})
        expect(state).toEqual({movies: 'test'})
    });
    
    it('If action type SET_MOVIE movie reducer return movie', () => {
        let state = {};
        state = movie(state, {type: 'SET_MOVIE', payload: 'movie'})
        expect(state).toEqual('movie')
    });
    it('If action type other than SET_MOVIE movie reducer return empty obj', () => {
        let state = {};
        state = movie(state, {type: 'SET', payload: 'movie'})
        expect(state).toEqual({})
    });
    
    it('If action type SET_LOADING_SEARCH isLoading reducer return new state', () => {
        let state = {
          search: false,
          movie: false
        };
        state = isLoading(state, {type: 'SET_LOADING_SEARCH', payload: true})
        expect(state).toEqual({search: true, movie: false})
    });
    it('If action type SET_LOADING_MOVIE isLoading reducer return new state', () => {
        let state = {
          search: false,
          movie: false
        };
        state = isLoading(state, {type: 'SET_LOADING_MOVIE', payload: true})
        expect(state).toEqual({search: false, movie: true})
    });
    it('If action type other isLoading reducer return prew state', () => {
        let state = {
          search: false,
          movie: false
        };
        state = isLoading(state, {type: 'SET', payload: true})
        expect(state).toEqual({search: false, movie: false})
    });
});