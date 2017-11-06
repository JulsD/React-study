import React from 'react';
import Logo from '../app/components/Logo';

test('Logo should render a <div>', () => {
  const wrapper = shallow(
    <Logo />
  );
  expect(wrapper).toMatchSnapshot();
});
