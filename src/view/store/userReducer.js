import { ADD_USER, EDIT_USER, DELETE_USER } from './userActions';

const initialState = {
    users: [
        { id: 1, name: 'Tom' },
        { id: 2, name: 'Jerry' },
        { id: 3, name: 'Harry' },
        { id: 4, name: 'Carry' },
        { id: 5, name: 'James' },
        { id: 6, name: 'Mike' },
    ],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            const newId = state.users.length > 0 ? state.users[state.users.length - 1].id + 1 : 1;
            const newUser = {...action.payload, id: newId };
            return {
                ...state,
                users: [...state.users, newUser],
            };
        case EDIT_USER:
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload.id ? {...user, name: action.payload.name } : user
                ),
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload),
            };
        default:
            return state;
    }
};

export default userReducer;