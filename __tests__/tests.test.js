import React from 'react';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Employee from '../src/Employee.js';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Renders a div', () => {
  const wrap = mount(<Employee/>);
  const div = wrap.find('div');
  expect(div.length).toBeGreaterThan(0);
});


// const emp = {image:"/media/images/cb6aa2bdca1f07e3151842ef010a23cc89edd500.jpeg",id:1,name:"Ana Roca Castro",title:"CEO"};


