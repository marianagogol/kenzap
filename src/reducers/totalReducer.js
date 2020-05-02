import update from 'immutability-helper';

const totalReducer = (store = {}, action) => {
    switch (action.type) {
        case 'CHANGE_TOTAL':
          return update(store, {
            "total": {$set: action.payload.total}
          });        
        default:
            return store;
    }
}

export default totalReducer;