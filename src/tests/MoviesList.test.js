import React from 'react';
import MoviesList from '../app/components/MoviesList';

test('MoviesList should render a <Link>', () => {
  const movies = [{ id: 1 }, { id: 2 },{ id: 3 }];
  const wrapper = shallow(
    <MoviesList movies={movies}/>
  );
  expect(wrapper).toMatchSnapshot();
});
