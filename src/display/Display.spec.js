import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

import Controls from "../controls/Controls";
import Dashboard from "../dashboard/Dashboard";
import Display from "./Display";

afterEach(cleanup);

describe("<Display />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Display />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<Display />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should display if gate is open/closed and if it is locked/unlocked", () => {
    const { getByText } = render(<Dashboard />);

    getByText(/unlocked/i);
    getByText(/open/i);
    getByText(/lock gate/i);
    getByText(/close gate/i);
  });

  it("should display 'Closed' if the closed prop is true", () => {

    const { getByText, queryByText } = render(<Display locked={false} closed={true} />);

    getByText(/closed/i);
  });

  it("should display 'Open' if the closed prop is false", () => {

    const { getByText, queryByText } = render(<Display locked={false} closed={false} />);

    getByText(/open/i);
  });

  describe("the gate", () => {
    it("should default to unlocked", () => {
      const { getByText } = render(<Dashboard />);

      getByText(/unlocked/i);
    });

    it("should default to open", () => {
      const { getByText } = render(<Dashboard />);

      getByText(/open/i);
    });
  });
});
