import React from 'react';
import MovieBox from '../app/components/MovieBox';

test('MovieBox should render a <div>', () => {
  const wrapper = shallow(
    <MovieBox />
  );
  expect(wrapper).toMatchSnapshot();
});
