import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Display from './Display';

describe('<Display />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Display />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
    // Step 2: Write this test.
    it('matches snapshot', () => {
      const tree = renderer.create(<Display />); // generates a DOM tree
  
      // snapshots are a JSON representation of the DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });
});
