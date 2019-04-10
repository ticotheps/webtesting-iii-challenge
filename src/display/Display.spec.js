import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

afterEach(cleanup);

describe('<Display />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Display />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
    it('matches snapshot', () => {
      const tree = renderer.create(<Display />);
  
      expect(tree.toJSON()).toMatchSnapshot();
    });
});
