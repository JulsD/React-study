import React from 'react';
import SearchResult from '../app/components/SearchResult';

test('SearchResult should render a <nav>', () => {
  const wrapper = shallow(
    <SearchResult />
  );
  expect(wrapper).toMatchSnapshot();
});
