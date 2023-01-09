const stateInit = {
    users: []
}

const userReducer = (state = stateInit, action = {} ) => {
    switch( action.type )
    {
        case 'ADD_USER':
            const { user } = action.payload;
            const updatedUers = [...state.users];
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

export default dragonReducer;