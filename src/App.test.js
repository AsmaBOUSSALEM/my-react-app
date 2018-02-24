import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  const output = shallow(
    <App />
  );
  
  expect(output.state().flag).toEqual(false);
  output.find('button').simulate('click');
  expect(output.find('button').text()).toEqual('Hello');
  expect(output.state().flag).toEqual(true);
});
