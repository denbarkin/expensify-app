// import React from "react";
// import ReactShallowRenderer from "react-test-renderer/shallow";
// import Header from "../../components/Header";

// test('should render Header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);

//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// })


// This version is using enzyme with JSON serializer which convert snap file
// to match more simple json file stracture very close to ReachShallowRenderer
// removes overhead of enzyme snap file.
import React from "react";
import { shallow } from 'enzyme';
import Header from "../../components/Header";

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});