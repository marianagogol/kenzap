import update from 'immutability-helper';

const ratingReducer = (store = {}, action) => {
    switch (action.type) {
        case 'CHANGE_RATING':
          return update(store, {
            "rating": {$set: action.payload.rt}
          });
        
        default:
            return store;
    }
}

export default ratingReducer;