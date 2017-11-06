import React from 'react';
import Header from '../app/components/Header';

test('Header should render a <header>', () => {
  const wrapper = shallow(
    <Header />
  );
  expect(wrapper).toMatchSnapshot();
});
