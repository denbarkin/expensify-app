import { login, logout } from "../../actions/auth";

test('should generate action object for login', () => {
  const uid = 'user.uid';
  const action = login(uid);
  expect(action).toEqual({
      type : 'LOGIN',
      uid
  });
})

test('should generate action object for logout', () => {
  const action = logout();
  expect(action).toEqual({
    type : 'LOGOUT'
  });
})

