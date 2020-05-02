export const addQuantity = (quantity) => ({
    type: 'ADD_QUANTITY',
    payload: {
        qt: quantity
    }
})

export const substractQuantity = (quantity) => ({
    type: 'SUBSTRACT_QUANTITY',
    payload: {
        quant: quantity
    }
})