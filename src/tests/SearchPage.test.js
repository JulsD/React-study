import React from 'react';
import { SearchPage } from '../app/pages/SearchPage';

test('Logo should render a <div>', () => {
  const testStore = {
    search: [1,2,3],
    sortBy: 'test',
    isLoading: false,
    location: {search: 'test'},
    searchByTitle: () => true,
    searchByDirector: () => true
  }
  const wrapper = shallow(
    <SearchPage search={testStore.search}
                sortBy={testStore.sortBy}
                isLoading={testStore.isLoading}
                location={testStore.location}
                searchByTitle={testStore.searchByTitle}
                searchByDirector={testStore.searchByDirector}/>
  );
  expect(wrapper).toMatchSnapshot();
});
