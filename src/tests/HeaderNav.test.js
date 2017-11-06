import React from 'react';
import HeaderNav from '../app/components/HeaderNav';

test('HeaderNav should render a <nav>', () => {
  const wrapper = shallow(
    <HeaderNav />
  );
  expect(wrapper).toMatchSnapshot();
});
