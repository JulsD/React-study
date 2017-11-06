import React from 'react';
import SearchSort from '../app/components/SearchSort';

test('SearchSort should render a <nav>', () => {
  const wrapper = shallow(
    <SearchSort />
  );
  expect(wrapper).toMatchSnapshot();
});
