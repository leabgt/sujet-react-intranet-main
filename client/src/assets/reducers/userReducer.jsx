const collaborator = JSON.parse(localStorage.getItem("collaborator"));

const stateInit = {
    users: collaborator
}

const userReducer = (state = stateInit, action = {} ) => {
    switch( action.type )
    {
        case 'ADD_USER':
            const user = action.payload;
            const updatedUsers = [...state.users];
            updatedUsers.push( user );
            return {
                ...state,
                users: updatedUsers
            }
        case 'DELETE_USER':
            const { userToDelete } = action.payload;
            return {
                ...state,
                users: state.users.filter( user => user.id !== userToDelete.id )
            }
        case 'REVERSE_USER':
            return {
                ...state,
                users: state.user.reverse()
            }
        default:
            return state;
    }
}

export default userReducer;