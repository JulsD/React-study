import React from 'react';
import Button from '../app/components/Button';

test('Button with type `button` should render a <button>', () => {
  const wrapper = shallow(
    <Button type='button'/>
  );
  expect(wrapper).toMatchSnapshot();
});

test('Button with type `link` should render a <Link>', () => {
  const wrapper = shallow(
    <Button to='href' type='link'/>
  );
  expect(wrapper).toMatchSnapshot();
});

test('Button with type `link` and `to` attr should render a <Link to="attr">', () => {
  const wrapper = shallow(
    <Button to='href' type='link'/>
  );
  const button = wrapper.find('Link');
  expect(button.prop('to')).toEqual('href');
});

test('Button with type `a` should render a <a>', () => {
  const wrapper = shallow(
    <Button to='href' type='a'/>
  );
  expect(wrapper).toMatchSnapshot();
});

test('Button with type `label` should render a <label>', () => {
  const wrapper = shallow(
    <Button htmlFor='id' type='label'/>
  );
  expect(wrapper).toMatchSnapshot();
});

test('Button without type should render a <button>', () => {
  const wrapper = shallow(
    <Button />
  );
  expect(wrapper).toMatchSnapshot();
});