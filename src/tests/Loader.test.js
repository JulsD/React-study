import React from 'react';
import Loader from '../app/components/Loader';

test('Loader should render a <div>', () => {
  const wrapper = shallow(
    <Loader />
  );
  expect(wrapper).toMatchSnapshot();
});
