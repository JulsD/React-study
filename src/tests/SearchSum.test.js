import React from 'react';
import { SearchSum } from '../app/components/SearchSum/SearchSum';

test('SearchSum should render a <nav>', () => {
  const search = {
    movies: [1,2,3]
  }
  const wrapper = shallow(
    <SearchSum search={search}/>
  );
  expect(wrapper).toMatchSnapshot();
});
