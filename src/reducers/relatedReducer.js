import update from 'immutability-helper';

const relatedReducer = (store = {}, action) => {
    switch (action.type) {
        case 'CHANGE_RELATED_RATING':
            return update(store, {
                [action.payload.index]: {
                    rating: {
                        $set: action.payload.relatedRating
                    }
                }                
              });
        default:
            return store;
    }
}

export default relatedReducer;