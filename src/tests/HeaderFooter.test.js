import React from 'react';
import HeaderFooter from '../app/components/HeaderFooter';

test('HeaderFooter should render a <div>', () => {
  const wrapper = shallow(
    <HeaderFooter />
  );
  expect(wrapper).toMatchSnapshot();
});
