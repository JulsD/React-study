import React from 'react';
import SearchBox from '../app/components/SearchBox';

test('SearchBox should render a <form>', () => {
  const wrapper = shallow(
    <SearchBox />
  );
  expect(wrapper).toMatchSnapshot();
});
