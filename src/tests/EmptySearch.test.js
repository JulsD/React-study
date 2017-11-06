import React from 'react';
import EmptySearch from '../app/components/EmptySearch';

test('EmptySearch renders `No films found` text inside it', () => {
  const wrapper = mount(
    <EmptySearch />
  );
  const p = wrapper.find('p');
  expect(p.text()).toBe('No films found');
});