import React from 'react';
import MoviesList from '../app/components/MoviesList';

test('MoviesList should render a <Link>', () => {
  const array = [1,2,3];
  const wrapper = shallow(
    <MoviesList movies={array}/>
  );
  expect(wrapper).toMatchSnapshot();
});
