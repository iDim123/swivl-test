import users, { setCurrentUserAction } from './users';

const initialState = {
  users: [
    {
      id: 1,
      login: 'l1'
    }
  ],
  currentUser: null
};

describe('Users reduser', () => {
  it('Set current user', () => {
    const action = setCurrentUserAction(1);
    const newState = {
      currentUser: {
        id: 1,
        login: 'l1'
      },
      users: [
        {
          id: 1,
          login: 'l1'
        }
      ]
    };
    expect(users(initialState, action)).toEqual(newState);
  });
});
