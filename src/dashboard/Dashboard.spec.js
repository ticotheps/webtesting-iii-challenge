import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Dashboard />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
    // Step 2: Write this test.
    it('matches snapshot', () => {
      const tree = renderer.create(<Dashboard />); // generates a DOM tree
  
      // snapshots are a JSON representation of the DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });
});