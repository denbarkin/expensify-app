import authReducer from "../../reducers/auth";

test('should set user.ıid for login', () => {
    const uid = 'test.user.uid';
    const action = {
        type : 'LOGIN',
        uid
    }
    const state = authReducer({}, action);
    expect(state).toEqual({
        uid
    })
})

test('should remove user.uid from the store.state for logout the user', () => {
    const action = {
      type : 'LOGOUT'
    }
    const state = authReducer({}, action);
    expect(state).toEqual( {} );
})
