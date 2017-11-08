import React from 'react';
import { SearchSort } from '../app/components/SearchSort/SearchSort';

test('SearchSort should render a <nav>', () => {
  const testStore = {
    setSortBy: () => true,
    sortBy: 'title'
  }
  const wrapper = shallow(
    <SearchSort setSortBy={testStore.setSortBy} sortBy={testStore.sortBy}/>
  );
  expect(wrapper).toMatchSnapshot();
});
