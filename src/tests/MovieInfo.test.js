import React from 'react';
import MovieInfo from '../app/components/MovieInfo';

test('MovieInfo should render a <div>', () => {
  const wrapper = shallow(
    <MovieInfo />
  );
  expect(wrapper).toMatchSnapshot();
});
