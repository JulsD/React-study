import React from 'react';
import Footer from '../app/components/Footer';

test('Footer should render a <footer>', () => {
  const wrapper = shallow(
    <Footer />
  );
  expect(wrapper).toMatchSnapshot();
});
