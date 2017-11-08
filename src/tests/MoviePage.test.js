import React from 'react';
import { MoviePage } from '../app/pages/MoviePage';
 
test('Logo should render a <div>', () => {
  const testStore = {
    match: {params: {id: 1}},
    movieInfo: {movie: {}, moviesByDir: [1,2]},
    isLoading: true,
    findMovie: () => true
  }
  const wrapper = shallow(
    <MoviePage movieInfo={testStore.movieInfo} 
               isLoading={testStore.isLoading} 
               match={testStore.match}
               findMovie={testStore.findMovie}/>
  );
  expect(wrapper).toMatchSnapshot();
});
