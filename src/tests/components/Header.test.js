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
import { Header } from "../../components/Header"; // without connect test.

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout = { () => {}} />);
    expect(wrapper).toMatchSnapshot();
});

// should call startLogout on button click
test('should call startLogout on button click', () => {
    // put a spy function in order to test
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout = {startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
})