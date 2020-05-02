import update from 'immutability-helper';

const wishlistReducer = (store = {}, action) => {
    switch (action.type) {
        case 'CHANGE_SELECTED_WISHLIST':
          return update(store, {
            "selected": {$set: action.payload.selected}
          });        
        default:
            return store;
    }
}

export default wishlistReducer;