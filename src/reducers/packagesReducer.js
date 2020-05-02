// import produce from 'immer';
import update from 'immutability-helper';

const packagesReducer = (store = {}, action) => {
    switch (action.type) {
        case 'CHANGE_SELECTED':
            return update(store,
                {$set: action.payload.newPackages}
            );
        default:
            return store;
    }
}

export default packagesReducer;