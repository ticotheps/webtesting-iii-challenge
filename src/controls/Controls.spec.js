import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Controls from './Controls';

describe('<Controls />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Controls />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
    it('matches snapshot', () => {
      const tree = renderer.create(<Controls />);
  
      expect(tree.toJSON()).toMatchSnapshot();
    });
});