import React from 'react';
import SearchNav from '../app/components/SearchNav';

test('SearchNav should render a <nav>', () => {
  const wrapper = shallow(
    <SearchNav />
  );
  expect(wrapper).toMatchSnapshot();
});
