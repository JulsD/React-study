import React from 'react';
import { MovieBox } from '../app/components/MovieBox/MovieBox';

test('MovieBox should render a <div>', () => {
  const movie = {
    poster_path: 'test',
    title: 'test',
    vote_average: 1,
    genres: [
      { id: 1, name: 'test' }, 
      { id: 2, name: 'test'}
    ],
    release_date: 'test',
    runtime:'test',
    overview: 'test',
    director: [
      { id: 1, name: 'test' }, 
      { id: 2, name: 'test'}
    ],
    actors: [
      { cast_id: 1, name: 'test' }, 
      { cast_id: 2, name: 'test'}
    ]
  }
  const wrapper = shallow(
    <MovieBox movie={movie}/>
  );
  expect(wrapper).toMatchSnapshot();
});
