import React from 'react';
import MovieItem from '../app/components/MovieItem';

test('MovieItem should render a <Link>', () => {
  const wrapper = shallow(
    <MovieItem />
  );
  expect(wrapper).toMatchSnapshot();
});
