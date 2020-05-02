export const changeRating = (newRating) => ({
    type: 'CHANGE_RATING',
    payload: {
        rt: newRating
    }
})