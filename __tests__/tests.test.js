import React from 'react';
import { mount, shallow } from 'enzyme';
import { configure } from 'enzyme';
import Employee from '../src/Employee.js';
import Employees from '../src/Employees.js';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



// I encountered an odd error with Enzyme that I've never seen before.
// It was blowing up when importing images.
test('Renders a div', () => {
  const wrap = mount(<Employees/>);
  const div = wrap.find('div');
  expect(div.length).toBeGreaterThan(0);
});

test('Request is successful, checking if data exists in state', () =>{
  const wrap = shallow(<Employees/>);
  expect(wrap.state('data').length).toBeGreaterThan(-1);
});

test('Renders a div', () => {
  const wrap = mount(<Employee/>);
  const div = wrap.find('div');
  expect(div.length).toBeGreaterThan(0);
});

test('Renders a div', () => {
  const wrap = shallow(<Employee url="https://www.geniusplaza.com/media/images/cb6aa2bdca1f07e3151842ef010a23cc89edd500.jpeg" name="Ana Roca Castro" title="CEO"/>);
  expect(wrap.find('img').exists()).toBe(true);
  expect(wrap.find('.emp-name').exists()).toBe(true);
  expect(wrap.find('.emp-title').exists()).toBe(true);

});

