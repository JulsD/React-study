import React from 'react';
import MovieItem from '../app/components/MovieItem';

test('MovieItem should render a <Link>', () => {
  const movie = {
    poster_path: 'test',
    title: 'test',
    id: 'test',
    release_date: 'test',
    vote_average: 'test'
  }
  const wrapper = shallow(
    <MovieItem movie={movie}/>
  );
  expect(wrapper).toMatchSnapshot();
});
