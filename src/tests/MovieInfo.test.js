import React from 'react';
import { MovieInfo } from '../app/components/MovieInfo/MovieInfo';

test('MovieInfo should render a <div>', () => {
  const directors = [{id: 1, name: 'test'},{id:2, name: 'test'}, {id:3, name: 'test'}];
  const wrapper = shallow(
    <MovieInfo directors={directors}/>
  );
  expect(wrapper).toMatchSnapshot();
});
