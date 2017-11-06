import React from 'react';
import NavMenu from '../app/components/NavMenu';

test('NavMenu should render a <ul>', () => {
  const wrapper = shallow(
    <NavMenu menu={['Search']}/>
  );
  expect(wrapper).toMatchSnapshot();
});
