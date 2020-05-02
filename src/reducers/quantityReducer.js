import update from 'immutability-helper';

const quantityReducer = (store = {}, action) => {
    switch (action.type) {
        case 'ADD_QUANTITY':
          return update(store, {
            "qt": {$set: action.payload.qt}
          });
        
        case 'SUBSTRACT_QUANTITY':
            return update(store, {
                "qt": {$set: action.payload.quant}
              });
        default:
            return store;
    }
}

export default quantityReducer;