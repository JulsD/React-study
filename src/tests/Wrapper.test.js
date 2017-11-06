import React from 'react';
import Wrapper from '../app/components/Wrapper';

test('Wrapper should render a <nav>', () => {
  const wrapper = shallow(
    <Wrapper />
  );
  expect(wrapper).toMatchSnapshot();
});
