import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";
import Display from "../display/Display";

afterEach(cleanup);

describe("<Dashboard />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<Dashboard />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should render the following controls: 'Lock Gate' and 'Close Gate'", () => {
    const { getByText } = render(<Dashboard />);

    getByText(/lock gate/i);
    getByText(/close gate/i);
  });

  it("should render the following displays: 'Unlocked' and 'Open'", () => {
    const { getByText, queryByText } = render(<Display />);

    getByText(/unlocked/i);
    getByText(/open/i);
  });
});
