import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { descendingSort, sortByStatus, defaultSort } from './helpers'
import App from './App';
import SelectList from './SelectList';
import DataList from './DataList';
import { testData, descendingOrder, statusOrder } from './data.test.js';
import realData from './data.js';

configure({ adapter: new Adapter() });

it('New renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('Renders SelectList', () => {
  const component = mount(<App />);
  expect(component.find(SelectList).length).toEqual(1);
  expect(component.find(SelectList).props().className).toEqual('select');
});

it('Renders DataList Passes all props to DataList', () => {
  const component = mount(<App />);
  expect(component.find(DataList).length).toEqual(1);
  expect(component.find(DataList).props().containerClass).toEqual('listContainer');
  expect(component.find(DataList).props().itemClass).toEqual('listItem');
  expect(toJson(component.find(DataList).props().data)).toEqual(toJson(realData));
});

it('Should do descending sort to data', () => {
  expect(toJson(descendingSort('stars', [...testData]))).toEqual(toJson(descendingOrder));
});

it('Should show only items with active status', () => {
  expect(toJson(sortByStatus('active', [...testData]))).toEqual(toJson(statusOrder));
});

it('Should show default sort data', () => {
  expect(toJson(defaultSort('default', [...testData]))).toEqual(toJson(testData));
});