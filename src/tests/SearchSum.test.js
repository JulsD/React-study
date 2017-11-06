import React from 'react';
import SearchSum from '../app/components/SearchSum';

test('SearchSum should render a <nav>', () => {
  const wrapper = shallow(
    <SearchSum />
  );
  expect(wrapper).toMatchSnapshot();
});
