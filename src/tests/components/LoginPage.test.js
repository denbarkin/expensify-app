import { shallow } from 'enzyme';
import React from 'react';
import { LoginPage } from '../../components/LoginPage';


test('should render LoginPage', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
})

// 1. Creates Spy Function.
// 2. Place Spy Function in to the component Props.
// 3. Simulate Click Event.
// 4. Assert Function Called after click event.
test('should call LoginPage on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin = {startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
})